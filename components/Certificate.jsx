'use client';
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import img1 from '../public/assests/img/LATEX-GLOVES.jpg'

export default function Certificate() {
  const certificates = [
    { 
      id: 1,
      title: 'ISO 13485 Certificate', 
      image: '/assests/img/LATEX-GLOVES.jpg'
    },
    { 
      id: 2,
      title: 'MD-5 Primewear®', 
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="500"%3E%3Crect fill="%23f0f0f0" width="400" height="500"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" fill="%23999" font-size="20" font-family="Arial"%3EMD-5 Primewear®%3C/text%3E%3C/svg%3E' 
    },
    { 
      id: 3,
      title: 'NSIC Primewear Certificate', 
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="500"%3E%3Crect fill="%23f0f0f0" width="400" height="500"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" fill="%23999" font-size="20" font-family="Arial"%3ENSIC Certificate%3C/text%3E%3C/svg%3E' 
    },
    { 
      id: 4,
      title: 'CE Certificate', 
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="500"%3E%3Crect fill="%23f0f0f0" width="400" height="500"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" fill="%23999" font-size="20" font-family="Arial"%3ECE Certificate%3C/text%3E%3C/svg%3E' 
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollLeft = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const scrollRight = () => {
    setCurrentIndex(prev => Math.min(certificates.length - 4, prev + 1));
  };

  return (
    <div className="bg-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-5xl font-bold text-center text-blue-700 mb-12">
          Certificates
        </h1>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="p-5 bg-white flex items-center justify-center h-80">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="px-6 py-5 bg-white border-t border-gray-100">
                <p className="text-center text-gray-800 font-semibold text-base">
                  {cert.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center gap-5">
          <button
            onClick={scrollLeft}
            className="w-12 h-12 rounded-full border-2 border-blue-700 bg-white flex items-center justify-center transition-all duration-300 hover:bg-blue-700 group"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 text-blue-700 group-hover:text-white" />
          </button>
          <button
            onClick={scrollRight}
            className="w-12 h-12 rounded-full border-2 border-blue-700 bg-white flex items-center justify-center transition-all duration-300 hover:bg-blue-700 group"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 text-blue-700 group-hover:text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}