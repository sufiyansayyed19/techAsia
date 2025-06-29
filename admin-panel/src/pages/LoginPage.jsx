import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { LogIn, KeyRound, Briefcase, BookText } from 'lucide-react';
import { Link } from 'react-router-dom';
import useAuthStore from '../store/authStore'; // 1. IMPORT our new auth store
import { API_BASE_URL } from '../config/api'; // 2. IMPORT the API URL
import logo from '../assets/logo.png';

const LoginPage = () => {
  // We get the user info and the login function from our store
  const { userInfo, login } = useAuthStore();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    const email = event.target.email.value;
    const password = event.target.password.value;

    try {
      // 3. This is the new API call
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }
      
      // 4. On success, use our store's login action
      login(data);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
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
          {/* 5. We now check userInfo from the store instead of local state */}
          {!userInfo ? (
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
                        required
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
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 px-8 py-3 font-semibold text-white bg-gradient-to-r from-amber-500 to-orange-600 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 disabled:from-zinc-500 disabled:to-zinc-600"
                    >
                      {loading ? 'Logging in...' : 'Login'}
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
                    <Link to="/products">
                        <motion.div whileHover={{ y: -5, scale: 1.03 }}>
                            <div className="bg-zinc-800 p-8 rounded-xl shadow-2xl border border-zinc-700 h-full text-center hover:border-orange-400 transition-colors">
                                <Briefcase className="mx-auto h-12 w-12 text-orange-400 mb-4" />
                                <h2 className="text-xl font-bold">Products</h2>
                                <p className="text-slate-400 text-sm mt-2">Create, edit, and delete company products.</p>
                            </div>
                        </motion.div>
                    </Link>
                    <Link to="/blogs">
                        <motion.div whileHover={{ y: -5, scale: 1.03 }}>
                            <div className="bg-zinc-800 p-8 rounded-xl shadow-2xl border border-zinc-700 h-full text-center hover:border-orange-400 transition-colors">
                                <BookText className="mx-auto h-12 w-12 text-orange-400 mb-4" />
                                <h2 className="text-xl font-bold">Tech Blogs</h2>
                                <p className="text-slate-400 text-sm mt-2">Write, publish, and manage blog articles.</p>
                            </div>
                        </motion.div>
                    </Link>
                </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LoginPage;