'use client';
import React from 'react';

export default function Certificate() {
  const certificates = [
    {
      id: 2,
      title: 'ISO 13485:2016',
      image: '/assests/img/second_certificate.png'
    }
  ];

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl sm:text-5xl font-bold text-center text-blue-700 mb-12">
          Certificates
        </h1>

        <div className="ml-auto mr-auto">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="p-6 flex items-center justify-center w-full h-[600px]">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="px-6 py-5 border-t border-gray-100">
                <p className="text-center text-gray-800 font-semibold text-lg">
                  {cert.title}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}