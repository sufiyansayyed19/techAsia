// src/pages/ProductsPage.jsx

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowLeft, Download } from 'lucide-react'; // <-- Add Download here // <-- Changed: Added ArrowLeft
import productsData from '../data/products.json';
import { useMediaQuery } from '../hooks/useMediaQuery'; // <-- Added: Import our hook

// --- NEW: Let's create the components right here for now. We can move them to separate files later. ---

// Component for the list on the left
const ProductList = ({ products, selectedProduct, onSelectProduct }) => (
  <aside>
    <h2 className="text-2xl font-bold text-zinc-800 mb-6 pb-4 border-b border-slate-200">
      All Products
    </h2>
    <div className="space-y-3 max-h-[80vh] overflow-y-auto pr-4">
      {products.map((product) => (
        <div
          key={product._id.$oid}
          onClick={() => onSelectProduct(product)}
          className={`flex items-start gap-4 p-3 rounded-lg cursor-pointer transition-all duration-300 ${
            selectedProduct?._id.$oid === product._id.$oid // Note the '?' for safety when null
              ? 'bg-orange-200 text-white shadow-lg'
              : 'hover:bg-slate-100'
          }`}
        >
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-16 h-16 object-contain rounded-md flex-shrink-0 bg-slate-200" 
          />
          <div>
            <h3 className="font-semibold text-zinc-800 text-sm leading-tight">{product.title}</h3>
          </div>
        </div>
      ))}
    </div>
  </aside>
);

// Component for the details on the right
const ProductDetail = ({ product, onBack }) => {
  const whatsappNumber = '917666308198'; // <-- IMPORTANT: Use your actual number
  const message = `Hello, I'm interested in your product: ${product.title}.`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.article
      key={product._id.$oid}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      {/* The "Back" button for mobile view */}
      {onBack && (
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm text-orange-600 font-semibold mb-6 hover:underline lg:hidden"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to All Products
        </button>
      )}

      <div className="relative w-full h-80 bg-slate-100 rounded-lg overflow-hidden mb-8 group">
        <img src={product.image} alt={product.title} className="w-full h-full object-contain p-4" />

        {/* --- DOWNLOAD BUTTON --- */}
        <a
          href={product.image}
          download
          className="absolute top-3 right-3 bg-gray-900/50 text-white p-2 rounded-full hover:bg-gray-900/80 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
          aria-label="Download image"
        >
          <Download className="w-5 h-5" />
        </a>
      </div>
      
      <h1 className="text-4xl font-bold text-zinc-800 mb-4">{product.title}</h1>
      <p className="text-slate-600 leading-relaxed mb-8">{product.description}</p>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-zinc-800 mb-4 border-b pb-2">Additional Features</h3>
        <ul className="space-y-3">
          {product.additionalFeatures.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <span className="text-slate-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-zinc-800 mb-4 border-b pb-2">Technical Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {Object.entries(product.technicalDetails).map(([key, value]) => (
            <div key={key} className="bg-slate-50 p-3 rounded-md border border-slate-200">
              <p className="font-semibold text-slate-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}:</p>
              <p className="text-zinc-800">{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* --- WHATSAPP BUTTON --- */}
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold py-3 px-6 rounded-lg hover:from-orange-600 hover:to-amber-600 transition-all duration-300 shadow-lg" // <-- CHANGE THIS LINE
      >
        Contact Now on WhatsApp
      </a>
    </motion.article>
  );
};


// Main Page Component
const ProductsPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null); // <-- Changed: Start with null
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  // This effect ensures the component logic runs only after mounting, preventing hydration errors
  useEffect(() => {
    // On desktop, select the first product. On mobile, do nothing (list will show).
    if (isDesktop) {
      setSelectedProduct(productsData[0]);
    } else {
      setSelectedProduct(null); // Ensure it's null on mobile resize
    }
  }, [isDesktop]);

  return (
    <div className="bg-white">
      {/* --- UPDATED HEADER --- */}
      {/* <section className="bg-zinc-800 border-b border-zinc-700 py-12">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-white">Our Products</h1>
          <p className="mt-3 text-slate-400 max-w-2xl mx-auto">
            Innovative solutions in electronics manufacturing and industrial automation. Browse our products below.
          </p>
        </div>
      </section> */}

      {/* Main Content Area: Master-Detail Layout */}
      <div className="container mx-auto px-6 py-16">
        {/* --- DESKTOP LAYOUT --- */}
        <div className="hidden lg:grid lg:grid-cols-4 lg:gap-12">
          <div className="lg:col-span-1">
            <ProductList 
              products={productsData}
              selectedProduct={selectedProduct}
              onSelectProduct={setSelectedProduct}
            />
          </div>
          <main className="lg:col-span-3">
            {selectedProduct && <ProductDetail product={selectedProduct} />}
          </main>
        </div>
        
        {/* --- MOBILE LAYOUT --- */}
        <div className="lg:hidden">
          <AnimatePresence mode="wait">
            {selectedProduct ? (
              <ProductDetail 
                product={selectedProduct} 
                onBack={() => setSelectedProduct(null)} 
              />
            ) : (
              <ProductList 
                products={productsData}
                selectedProduct={selectedProduct}
                onSelectProduct={setSelectedProduct}
              />
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};

export default ProductsPage;