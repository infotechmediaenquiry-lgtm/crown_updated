"use client";

import Link from "next/link";


export default function HeroHome() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">

      {/* IMAGE GRID */}
      <div className="absolute inset-0 grid grid-cols-3">
        <img
          src="/assests/img/banner.jpg"
          alt="Hospital Disposable"
          className="w-full h-full object-cover scale-105"
        />
        <img
          src="/assests/img/about_us.jpg"
          alt="Medical Drapes"
          className="w-full h-full object-cover scale-105"
        />
        <img
          src="/assests/img/Manufacturer of PPE Kit.jpeg"
          alt="Healthcare Products"
          className="w-full h-full object-cover scale-105"
        />
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>

      {/* CONTENT */}
      <div className="relative z-10 px-6 text-center max-w-4xl">

        {/* TAGLINE */}
        <p className="text-blue-400 uppercase tracking-widest text-sm sm:text-base mb-4">
          Trusted Healthcare Manufacturing Partner
        </p>

        {/* HEADING */}
        <h1
          className="
            text-white font-extrabold leading-tight
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl
          "
        >
          LEADING <br />
          MANUFACTURER <br />
          OF HOSPITAL <br />
          <span className="text-blue-400">DISPOSABLES</span>
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-6 text-gray-200 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          Manufacturing high-quality hospital disposables that meet global
          medical standards, ensuring hygiene, safety, and performance.
        </p>

        {/* BUTTONS */}
        {/* <div className="mt-10 flex justify-center gap-5 flex-wrap">
          <button
            className="
              px-9 py-3 rounded-full bg-blue-600 text-white font-semibold
              shadow-lg transition-all duration-300
              hover:bg-blue-700 hover:scale-105 hover:shadow-xl
            "
          >
            DISPOSABLE SECTION
          </button>

           <button
            className="
              px-9 py-3 rounded-full bg-blue-600 text-white font-semibold
              shadow-lg transition-all duration-300
              hover:bg-blue-700 hover:scale-105 hover:shadow-xl
            "
          >
            DRAPES SECTION
          </button>

          <button
            className="
              px-9 py-3 rounded-full border-2 border-white text-white font-semibold
              transition-all duration-300
              hover:bg-white hover:text-gray-900 hover:scale-105
            "
          >
            OTHERS SECTION
          </button>
        </div> */}

        <div className="mt-10 flex justify-center gap-5 flex-wrap">
  <Link href="/disposable-section">
    <button
      className="
        px-9 py-3 rounded-full bg-blue-600 text-white font-semibold
        shadow-lg transition-all duration-300
        hover:bg-blue-700 hover:scale-105 hover:shadow-xl
      "
    >
      DISPOSABLE SECTION
    </button>
  </Link>

  <Link href="/drapes-section">
    <button
      className="
        px-9 py-3 rounded-full bg-blue-600 text-white font-semibold
        shadow-lg transition-all duration-300
        hover:bg-blue-700 hover:scale-105 hover:shadow-xl
      "
    >
      DRAPES SECTION
    </button>
  </Link>

  <Link href="/others-section">
    <button
      className="
        px-9 py-3 rounded-full border-2 border-white text-white font-semibold
        transition-all duration-300
        hover:bg-white hover:text-gray-900 hover:scale-105
      "
    >
      OTHERS SECTION
    </button>
  </Link>
</div>

      </div>
    </section>
  );
}

