"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { getProductsBySection } from '@/lib/productsData';

export default function DisposableSectionPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12; // Changed to 12 for better 4-column grid
  
  const sectionSlug = 'disposable-section';
  
  // Centralized data se products fetch karo
  const allProducts = getProductsBySection(sectionSlug);

  // Pagination calculation
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = allProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(allProducts.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>›</span>
            <span className="text-gray-900 font-medium">Disposable Section</span>
          </div>
        </div>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Disposable Section</h1>
          <p className="text-gray-600">
            Browse our complete range of disposable medical products
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Total Products: <span className="font-semibold">{allProducts.length}</span>
          </p>
        </div>

        {/* Products Grid - NEW DESIGN */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {currentProducts.map((product) => (
            <Link
              key={product.id}
              href={`/disposable-section/${product.id}`}
              className="group"
            >
              {/* Product Card - NEW STYLE */}
              <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                {/* Image Container with Light Blue Background */}
                <div className="bg-[#7FB3D5] p-8 flex items-center justify-center" style={{ minHeight: '250px' }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-auto object-contain max-h-48"
                  />
                </div>
                
                {/* Product Info */}
                <div className="p-4 text-center bg-white">
                  <h3 className="text-base font-semibold text-gray-900 mb-3 min-h-12 flex items-center justify-center">
                    {product.name}
                  </h3>
                  
                  {/* View More Button */}
                  <button className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold py-2.5 px-6 rounded-lg transition-colors duration-300">
                    View More
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Products Message */}
        {allProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products available in this section.</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 flex-wrap">
            {/* Previous Button */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                currentPage === 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              Previous
            </button>

            {/* Page Numbers */}
            {[...Array(totalPages)].map((_, index) => {
              const pageNumber = index + 1;
              return (
                <button
                  key={pageNumber}
                  onClick={() => handlePageChange(pageNumber)}
                  className={`w-10 h-10 rounded-lg font-semibold transition-all ${
                    currentPage === pageNumber
                      ? 'bg-blue-600 text-white shadow-lg scale-110'
                      : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-300'
                  }`}
                >
                  {pageNumber}
                </button>
              );
            })}

            {/* Next Button */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                currentPage === totalPages
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              Next
            </button>
          </div>
        )}

        {/* Page Info */}
        {allProducts.length > 0 && (
          <div className="text-center mt-4 text-gray-600">
            Showing {indexOfFirstProduct + 1} - {Math.min(indexOfLastProduct, allProducts.length)} of {allProducts.length} products
          </div>
        )}
      </div>
    </div>
  );
}