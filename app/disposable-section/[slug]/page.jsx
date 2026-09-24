import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';

import {
  productsData,
  getRelatedProducts
} from '@/lib/productsData';

export default async function DisposableProductDetailPage({ params }) {

  // Get slug from URL
  const slug = params.slug;

  // Find product by slug
const product = Object.values(productsData).find(
    (p) =>
      p.slug === slug &&
      p.sectionSlug === 'disposable-section'
  );

  // Product not found
  if (!product) {
    notFound();
  }

  // Get related products
  const relatedProducts = getRelatedProducts(
    product.id,
    'disposable-section',
    4
  );

  // Markdown file path
  const filePath = path.join(
    process.cwd(),
    'content/products',
    `${slug}.md`
  );

  // Read markdown content
  let markdownContent = '';

  try {
    markdownContent = fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    markdownContent = '# Description Coming Soon';
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">

            <Link
              href="/"
              className="hover:text-blue-600 transition-colors"
            >
              Home
            </Link>

            <span>›</span>

            <Link
              href="/disposable-section"
              className="hover:text-blue-600 transition-colors"
            >
              Disposable Section
            </Link>

            <span>›</span>

            <span className="text-gray-900 font-medium">
              {product.name}
            </span>

          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid lg:grid-cols-2 gap-12 mb-12">

          {/* Product Image */}
          <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden shadow-lg">

            <div
              className="bg-[#7FB3D5] p-12 flex items-center justify-center"
              style={{ minHeight: '500px' }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto object-contain max-h-96"
              />
            </div>

          </div>

          {/* Product Info */}
          <div>

            <h1 className="text-5xl font-black text-gray-900 mb-6">
              {product.name}
            </h1>

            {/* Category */}
            <div className="mb-8">
              <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
                {product.category}
              </span>
            </div>

            {/* Short Description */}
            <div className="mb-8">

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Product Description
              </h2>

              <p className="text-gray-700 leading-relaxed text-lg">
                {product.shortDescription}
              </p>

            </div>

            {/* Buttons */}
            <div className="flex gap-4 flex-wrap">

              <Link
                href="/disposable-section"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all font-semibold"
              >
                Back to Products
              </Link>

            </div>

          </div>

        </div>

        {/* Full Markdown Content */}
        <div className="bg-white rounded-2xl shadow-sm border p-8 mb-16">

          <div className="prose lg:prose-lg max-w-none prose-blue">

            <ReactMarkdown>
              {markdownContent}
            </ReactMarkdown>

          </div>

        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (

          <div className="border-t pt-12">

            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Related Products
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">

              {relatedProducts.map((relatedProduct) => (

                <Link
                  key={relatedProduct.id}
                  href={`/disposable-section/${relatedProduct.slug}`}
                  className="group"
                >

                  <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">

                    {/* Image */}
                    <div
                      className="bg-[#7FB3D5] p-6 flex items-center justify-center"
                      style={{ minHeight: '200px' }}
                    >
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-auto object-contain max-h-40"
                      />
                    </div>

                    {/* Info */}
                    <div className="p-3 text-center bg-white">

                      <h3 className="text-sm font-semibold text-gray-900 mb-2 min-h-10 flex items-center justify-center">
                        {relatedProduct.name}
                      </h3>

                      <button className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 text-sm">
                        View More
                      </button>

                    </div>

                  </div>

                </Link>

              ))}

            </div>

          </div>

        )}

      </div>

    </div>
  );
}