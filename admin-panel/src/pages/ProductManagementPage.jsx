// src/pages/ProductManagementPage.jsx
import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProductForm from '../components/products/ProductForm';
import ProductList from '../components/products/productList';
import { mockProducts } from '../data/mockProducts';
import logo from '../assets/logo.png';

const ProductManagementPage = () => {
  const [view, setView] = useState('list'); // 'list' or 'form'
  const [products, setProducts] = useState(mockProducts);
  const [currentProduct, setCurrentProduct] = useState(null);

  const handleAddNew = () => {
    setCurrentProduct(null);
    setView('form');
  };

  const handleEdit = (product) => {
    setCurrentProduct(product);
    setView('form');
  };
  
  const handleCancel = () => {
    setView('list');
  };

  const handleSave = (productData) => {
    if (productData._id) {
      // Update existing
      setProducts(products.map(p => p._id === productData._id ? productData : p));
    } else {
      // Add new
      const newProduct = { ...productData, _id: `prod_${Date.now()}` };
      setProducts([...products, newProduct]);
    }
    setView('list');
  };
  
  const handleDelete = (productId) => {
    if(window.confirm('Are you sure you want to delete this product?')) {
        setProducts(products.filter(p => p._id !== productId));
    }
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-8">
      <header className="flex justify-between items-center mb-8">
        <Link to="/"><img src={logo} alt="TechAsia Logo" className="h-12" /></Link>
        <h1 className="text-3xl font-bold text-orange-400">Product Management</h1>
        <button 
            onClick={handleAddNew}
            className="px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full font-semibold"
        >
          Add New
        </button>
      </header>
      
      <main>
        <AnimatePresence mode="wait">
          {view === 'list' ? (
            <motion.div key="list" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
              <ProductList products={products} onEdit={handleEdit} onDelete={handleDelete} />
            </motion.div>
          ) : (
            <motion.div key="form" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
              <ProductForm product={currentProduct} onSave={handleSave} onCancel={handleCancel} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default ProductManagementPage;