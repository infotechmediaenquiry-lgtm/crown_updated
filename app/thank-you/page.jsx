import React from 'react';
import Link from 'next/link';
import Script from 'next/script';

export const metadata = {
  title: "Thank You | Crown Healthcare Disposables",
  description: "Thank you for reaching out to Crown Healthcare Disposables. We have received your inquiry and will get back to you shortly.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
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

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>›</span>
            <span className="text-gray-900 font-medium">Thank You</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-grow">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 sm:p-14 text-center">
          {/* Animated Success Icon */}
          <div className="w-24 h-24 bg-green-50 border-4 border-green-500 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-100">
            <svg 
              className="w-12 h-12" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            Thank You for Contacting Us!
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Your inquiry has been successfully received. Our specialized team is reviewing your requirements and will get in touch with you within <strong className="text-blue-600 font-bold">24 hours</strong>.
          </p>

          {/* Highlights / What happens next */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12 text-left">
            <div className="bg-blue-50/60 border border-blue-100 rounded-2xl p-6 transition-transform hover:-translate-y-1 duration-200">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Requirement Review</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our product specialists are examining your request to prepare the best quotation and product details.
              </p>
            </div>

            <div className="bg-blue-50/60 border border-blue-100 rounded-2xl p-6 transition-transform hover:-translate-y-1 duration-200">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Direct Contact</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Need urgent assistance? Call us directly at <a href="tel:+919152965752" className="text-blue-600 font-semibold hover:underline">+91 9152965752</a> or <a href="tel:+918454949544" className="text-blue-600 font-semibold hover:underline">+91 84549 49544</a>.
              </p>
            </div>

            <div className="bg-blue-50/60 border border-blue-100 rounded-2xl p-6 transition-transform hover:-translate-y-1 duration-200">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Product Catalog</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Download our official product brochure to discover our full range of medical drapes and hospital disposables.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-200 transition-all transform hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Back to Home
            </Link>

            <Link
              href="/disposable-section"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white border-2 border-gray-200 hover:border-blue-600 text-gray-700 hover:text-blue-600 font-semibold rounded-xl transition-all transform hover:-translate-y-0.5"
            >
              Explore Products
            </Link>

            <a
              href="/assests/Brochure_Crown_Lowres-2.pdf"
              download
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-xl transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Brochure
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
