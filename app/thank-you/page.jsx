"use client";

import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { useRouter } from 'next/navigation';

export default function ThankYouPage() {
  const router = useRouter();

  const handleGoBack = () => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/60 via-gray-50 to-indigo-50/40 flex items-center justify-center p-4 sm:p-8">
      {/* Event snippet for Submit lead form conversion page */}
      <Script id="google-ads-conversion" strategy="afterInteractive">
        {`
          gtag('event', 'conversion', {
              'send_to': 'AW-18486408766/FNi9CMTXyowdEL7sgO9E',
              'value': 1.0,
              'currency': 'INR'
          });
        `}
      </Script>

      {/* Thank You Card */}
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 sm:p-12 text-center relative overflow-hidden">
        {/* Decorative Top Accent Bar */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600" />

        {/* Company Logo Inside Card */}
        <div className="mb-6 flex justify-center">
          <img
            src="/assests/img/new_logo.png"
            alt="Crown Healthcare Disposables"
            className="h-14 sm:h-16 w-auto object-contain drop-shadow-sm"
          />
        </div>

        {/* Success Checkmark Badge */}
        <div className="w-20 h-20 bg-green-50 border-4 border-green-500 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-100/80 animate-in fade-in zoom-in duration-300">
          <svg
            className="w-10 h-10"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Headings */}
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3 tracking-tight">
          Thank You for Contacting Us!
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-lg mx-auto mb-6 leading-relaxed">
          Your inquiry has been successfully received. Our specialized team is reviewing your requirements and will get back to you within <span className="text-blue-600 font-bold">24 hours</span>.
        </p>

        {/* Quick Assistance Box */}
        <div className="bg-blue-50/70 border border-blue-100 rounded-2xl p-4 sm:p-5 mb-8 text-sm text-gray-700 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            <span>Call: <a href="tel:+919152965752" className="text-blue-600 font-semibold hover:underline">+91 9152965752</a></span>
          </div>
          <span className="hidden sm:inline text-gray-300">|</span>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            <span><a href="mailto:info@crownhealthcare.co.in" className="text-blue-600 font-semibold hover:underline">info@crownhealthcare.co.in</a></span>
          </div>
        </div>

        {/* 3 Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-4 border-t border-gray-100">
          {/* Left Button: Go Back */}
          <button
            onClick={handleGoBack}
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded-xl transition-all shadow-sm hover:shadow"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Go Back
          </button>

          {/* Center Button: Home */}
          <Link
            href="/"
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all shadow-md hover:shadow-lg shadow-blue-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Home
          </Link>

          {/* Right Button: Explore Products */}
          <Link
            href="/disposable-section"
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white border-2 border-blue-600 hover:bg-blue-50 text-blue-600 font-semibold rounded-xl transition-all shadow-sm hover:shadow"
          >
            Explore Products
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
