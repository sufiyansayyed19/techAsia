// src/pages/LoginPage.jsx

import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { LogIn, KeyRound, Briefcase, BookText } from 'lucide-react';
import logo from '../assets/logo.png'; // We'll add the logo next

const LoginPage = () => {
  // State to track if the user is authenticated
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    const password = event.target.password.value;

    // --- MOCK AUTHENTICATION ---
    // In the real backend, this will be an API call.
    // For now, we'll use a simple hardcoded password.
    if (password === 'admin') {
      setError('');
      setIsLoggedIn(true);
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.3 } }
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-md mx-auto">
        <img src={logo} alt="TechAsia Logo" className="h-16 mx-auto mb-8" />
        
        <AnimatePresence mode="wait">
          {!isLoggedIn ? (
            // --- LOGIN FORM ---
            <motion.div
              key="login-form"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="bg-zinc-800 p-8 rounded-xl shadow-2xl border border-zinc-700">
                <h1 className="text-2xl font-bold text-center text-orange-400 mb-6">Admin Panel Access</h1>
                <form onSubmit={handleLogin} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <div className="relative">
                      <LogIn className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                      <input
                        type="email"
                        name="email"
                        id="email"
                        defaultValue="admin@techasia.com"
                        readOnly
                        className="w-full p-3 pl-10 bg-zinc-700 border border-zinc-600 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition placeholder:text-slate-400"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="password" className="sr-only">Password</label>
                    <div className="relative">
                       <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                      <input
                        type="password"
                        name="password"
                        id="password"
                        required
                        className="w-full p-3 pl-10 bg-zinc-700 border border-zinc-600 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition placeholder:text-slate-400"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                   {error && <p className="text-sm text-red-400 text-center">{error}</p>}
                  <div>
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 px-8 py-3 font-semibold text-white bg-gradient-to-r from-amber-500 to-orange-600 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          ) : (
            // --- DASHBOARD OPTIONS ---
            <motion.div
              key="dashboard"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
                <h1 className="text-3xl font-bold text-center mb-8">Select Content to Manage</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Products Card */}
                    <motion.div whileHover={{ y: -5, scale: 1.03 }} className="cursor-pointer">
                        <div className="bg-zinc-800 p-8 rounded-xl shadow-2xl border border-zinc-700 h-full text-center hover:border-orange-400 transition-colors">
                            <Briefcase className="mx-auto h-12 w-12 text-orange-400 mb-4" />
                            <h2 className="text-xl font-bold">Products</h2>
                            <p className="text-slate-400 text-sm mt-2">Create, edit, and delete company products.</p>
                        </div>
                    </motion.div>
                    
                    {/* Blogs Card */}
                    <motion.div whileHover={{ y: -5, scale: 1.03 }} className="cursor-pointer">
                        <div className="bg-zinc-800 p-8 rounded-xl shadow-2xl border border-zinc-700 h-full text-center hover:border-orange-400 transition-colors">
                            <BookText className="mx-auto h-12 w-12 text-orange-400 mb-4" />
                            <h2 className="text-xl font-bold">Tech Blogs</h2>
                            <p className="text-slate-400 text-sm mt-2">Write, publish, and manage blog articles.</p>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LoginPage;