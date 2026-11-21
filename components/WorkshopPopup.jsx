"use client";

import React, { useState, useEffect } from "react";

export default function WorkshopPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Pehle 1.5 second tak normal website dikhegi, uske baad popup aayega
    const timer = setTimeout(() => {
      setIsOpen(true);
      // Smooth fade & scale entrance transition
      requestAnimationFrame(() => {
        setTimeout(() => {
          setAnimate(true);
        }, 30);
      });
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Popup open hone par background scroll lock karein
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Smooth close handler with animation
  const handleClose = () => {
    setAnimate(false);
    setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
      {/* Dark Blurred Backdrop with smooth fade */}
      <div
        onClick={handleClose}
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm cursor-pointer transition-opacity duration-300 ease-out ${
          animate ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      />

      {/* Modal Dialog Card with smooth scale & fade */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative z-10 w-full max-w-lg sm:max-w-2xl md:max-w-3xl lg:max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 flex flex-col my-auto transform transition-all duration-300 ease-out ${
          animate
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-4"
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="workshop-popup-title"
      >
        {/* Close Button (Top-Right) */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-2.5 right-2.5 sm:top-3.5 sm:right-3.5 z-20 bg-black/75 hover:bg-black text-white p-2 sm:p-2.5 rounded-full transition-all duration-200 shadow-lg hover:scale-110 active:scale-95 focus:outline-none"
          title="Close Popup"
          aria-label="Close"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Workshop Image Container (Clickable to Register) */}
        <a
          href="https://api.whatsapp.com/send/?phone=917305780780&text=Hi+register+me%21&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-full max-h-[72vh] sm:max-h-[78vh] overflow-y-auto bg-gray-900 flex items-center justify-center cursor-pointer group"
          title="Click to Register on WhatsApp"
        >
          <img
            src="/assests/img/seminar-workshops.webp"
            alt="Seminars & Workshops - Everything they fail to teach you in Medical College"
            loading="eager"
            fetchPriority="high"
            onError={(e) => {
              if (!e.currentTarget.dataset.retried) {
                e.currentTarget.dataset.retried = "1";
                e.currentTarget.src = "/assets/img/seminar-workshops.webp";
              }
            }}
            className="w-full h-auto object-contain select-none block transition-opacity duration-200 group-hover:opacity-95"
          />
        </a>

        {/* Bottom Action Footer */}
        <div className="bg-white px-4 py-3 sm:px-6 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-gray-100">
          <div className="text-center sm:text-left">
            <p
              className="text-sm sm:text-base font-semibold text-gray-900"
              id="workshop-popup-title"
            >
              Upcoming Seminars & Workshops
            </p>
            <p className="text-xs sm:text-sm text-gray-500">
              December 2026 • Hospital Management & Healthcare Excellence
            </p>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
            <button
              type="button"
              onClick={handleClose}
              className="px-4 py-2 text-xs sm:text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
            >
              Close
            </button>
            <a
              href="https://api.whatsapp.com/send/?phone=917305780780&text=Hi+register+me%21&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold text-white bg-green-600 hover:bg-green-700 active:bg-green-800 rounded-lg shadow-sm hover:shadow transition-all"
            >
              {/* WhatsApp Icon */}
              <svg
                className="w-4 h-4 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.54 1.772.82 2.791.82 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.766-5.768-5.766zm3.385 8.167c-.145.408-.847.781-1.183.824-.316.04-.707.065-2.072-.501-1.636-.677-2.684-2.348-2.766-2.457-.081-.109-.652-.867-.652-1.654 0-.786.411-1.173.557-1.332.146-.159.32-.198.427-.198.106 0 .213.002.306.007.098.005.231-.037.362.277.135.324.462 1.127.502 1.209.041.082.068.178.014.286-.054.109-.081.177-.162.272-.081.096-.172.214-.246.287-.082.081-.168.17-.072.335.096.164.428.706.918 1.142.631.562 1.163.736 1.327.818.164.082.261.072.357-.038.096-.109.412-.48.522-.644.109-.164.218-.137.368-.082.15.054.954.45 1.118.532.164.082.273.123.314.191.041.069.041.399-.104.807z"/>
              </svg>
              <span>Register on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
