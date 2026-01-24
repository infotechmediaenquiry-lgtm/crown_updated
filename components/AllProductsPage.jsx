"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getAllProducts } from "@/lib/productsData";

export default function AllProductsPage() {
  const allProducts = getAllProducts();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [productsPerView, setProductsPerView] = useState(4);

  /* RESPONSIVE PRODUCTS PER VIEW */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setProductsPerView(1);
      else if (window.innerWidth < 768) setProductsPerView(2);
      else if (window.innerWidth < 1024) setProductsPerView(3);
      else setProductsPerView(4);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* AUTO SLIDE */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = allProducts.length - productsPerView;
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 10000);

    return () => clearInterval(interval);
  }, [allProducts.length, productsPerView]);

  /* NAVIGATION */
  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev <= 0 ? allProducts.length - productsPerView : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => {
      const maxIndex = allProducts.length - productsPerView;
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  const displayProducts = allProducts.slice(
    currentIndex,
    currentIndex + productsPerView
  );

  const getProductWidth = () => {
    const gap = 24;
    const totalGap = gap * (productsPerView - 1);
    return `calc(${100 / productsPerView}% - ${
      totalGap / productsPerView
    }px)`;
  };

  /* ===== 3 DOT LOGIC ===== */
  const maxIndex = Math.max(1, allProducts.length - productsPerView);
  const activeDot = Math.min(
    2,
    Math.floor((currentIndex / maxIndex) * 3)
  );

  return (
    <div className="bg-white py-6 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-3">
            All Products
          </h1>
          <p className="text-gray-600 text-base sm:text-lg">
            Explore our complete range of medical products
          </p>
        </div>

        {/* CAROUSEL */}
        <div className="relative px-8 sm:px-12">
          <div className="overflow-hidden">
            <div className="flex gap-4 sm:gap-6 transition-all duration-700">
              {displayProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex-shrink-0"
                  style={{ width: getProductWidth() }}
                >
                  <Link href={`/${product.sectionSlug}/${product.id}`}>
                    <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:scale-105 transition-all">
                      <div className="bg-[#7FB3D5] p-6 flex items-center justify-center min-h-[220px]">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="max-h-40 object-contain"
                        />
                      </div>

                      <div className="p-4 text-center">
                        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                          {product.name}
                        </h3>
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">
                          View More
                        </button>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* ARROWS */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow hover:scale-110 transition"
          >
            ‹
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow hover:scale-110 transition"
          >
            ›
          </button>
        </div>

        {/* === FIXED 3 DOTS === */}
        <div className="mt-8 flex justify-center gap-3">
          {[0, 1, 2].map((dot) => (
            <button
              key={dot}
              onClick={() => {
                const target = Math.floor((dot / 2) * maxIndex);
                setCurrentIndex(target);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeDot === dot
                  ? "w-8 bg-blue-600"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* COUNTER */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Showing {currentIndex + 1} –{" "}
          {Math.min(currentIndex + productsPerView, allProducts.length)} of{" "}
          {allProducts.length}
        </p>

      </div>
    </div>
  );
}
