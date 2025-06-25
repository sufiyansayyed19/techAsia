// src/pages/ProductManagementPage.jsx
import React, { useState, useEffect } from 'react'; // <-- Import useEffect
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProductList from '../components/products/ProductList';
import ProductForm from '../components/products/ProductForm';
import { API_BASE_URL } from '../config/api'; // <-- Import our API URL
import logo from '../assets/logo.png';

const ProductManagementPage = () => {
  const [view, setView] = useState('list');
  const [products, setProducts] = useState([]); // <-- Start with an empty array
  const [currentProduct, setCurrentProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // <-- For loading state

  // --- NEW: Function to fetch data from the API ---
  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${API_BASE_URL}/products`);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // --- NEW: useEffect to fetch data when the page loads ---
  useEffect(() => {
    fetchProducts();
  }, []);

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

  // --- UPDATED: handleSave now talks to the backend ---
  const handleSave = async (productData) => {
    // Note: File upload logic will be added here later.
    // For now, it just saves the text data.
    const isUpdating = !!productData._id;
    const url = isUpdating ? `${API_BASE_URL}/products/${productData._id}` : `${API_BASE_URL}/products`;
    const method = isUpdating ? 'PUT' : 'POST';

    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      await response.json(); // Wait for the response
      await fetchProducts(); // Refetch all products to show the update
      setView('list');

    } catch (error) {
      console.error("Failed to save product:", error);
    }
  };
  
  // --- UPDATED: handleDelete now talks to the backend ---
  const handleDelete = async (productId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await fetch(`${API_BASE_URL}/products/${productId}`, {
          method: 'DELETE'
        });
        await fetchProducts(); // Refetch to update the list
      } catch (error) {
        console.error("Failed to delete product:", error);
      }
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
        {isLoading ? (
          <p>Loading products...</p>
        ) : (
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
        )}
      </main>
    </div>
  );
};

export default ProductManagementPage;