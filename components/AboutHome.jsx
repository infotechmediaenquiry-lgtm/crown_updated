"use client";

import { Target, Eye } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutUsSection() {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-blue-700 font-semibold mb-2 tracking-wide">
              About Us
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-5">
              Crown HealthCare Disposables
            </h2>

            <div className="space-y-5 text-gray-600 leading-relaxed text-sm sm:text-base">
              <p>
                Crown HealthCare Disposables is a trusted name in the healthcare industry,
                engaged in the manufacturing and supply of high-quality hospital
                disposables and medical products.
              </p>

              <p>
                With a strong focus on safety, hygiene, and efficiency, our
                solutions are designed to minimize infection risks while
                ensuring smooth hospital operations.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-7 inline-flex items-center justify-center rounded-full 
                         bg-blue-700 px-7 py-3 text-white font-medium 
                         hover:bg-blue-800 transition shadow-md"
            >
              Read More
            </motion.button>
          </motion.div>

          {/* RIGHT CARDS */}
          <div className="grid sm:grid-cols-2 gap-8 sm:gap-8">

            {/* MISSION */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="relative border-2 border-blue-700 rounded-2xl 
                         px-6 pt-20 pb-8 text-center 
                         bg-white shadow-sm hover:shadow-xl transition"
            >
              <div
                className="absolute -top-8 left-1/2 -translate-x-1/2 
                           bg-blue-700 p-4 rounded-xl shadow-lg"
              >
                <Target className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                Mission
              </h3>

              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                To deliver reliable, high-quality hospital disposables that
                enhance patient safety and support healthcare professionals.
              </p>
            </motion.div>

            {/* VISION */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="relative border-2 border-blue-700 rounded-2xl 
           px-6 pt-24 sm:pt-20 pb-8 text-center 
           bg-white shadow-sm hover:shadow-xl transition
           sm:translate-y-8"
            >
              <div
                className="absolute -top-6 sm:-top-8 left-1/2 -translate-x-1/2 
           bg-blue-700 p-4 rounded-xl shadow-lg"
              >
                <Eye className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                Vision
              </h3>

              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                To become a leading healthcare solutions provider recognized
                for quality, innovation, and ethical practices.
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
