// src/pages/BlogsPage.jsx
import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import blogsData from '../data/blogsData.json';

const BlogsPage = () => {
  // --- NEW: State to track the currently selected article ---
  // We initialize it with the first blog post from our data.
  const [selectedPost, setSelectedPost] = useState(blogsData[0]);
  const [isClient, setIsClient] = useState(false);

  // This effect ensures the initial state matches on server and client
  // to prevent hydration errors if we ever use SSR.
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Helper function to format the date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (!isClient) {
    return null; // or a loading spinner
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <section className="bg-slate-100 border-b border-slate-200 py-12">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-zinc-800">Tech Blog</h1>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Browse our articles on the left and read the full content on the right.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* --- LEFT COLUMN: Article List --- */}
          <aside className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-zinc-800 mb-6 pb-4 border-b border-slate-200">
              All Articles
            </h2>
            <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-4">
              {blogsData.map((post) => (
                <div
                  key={post._id.$oid}
                  onClick={() => setSelectedPost(post)}
                  className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                    selectedPost._id.$oid === post._id.$oid
                      ? 'bg-orange-100 border-l-4 border-orange-500'
                      : 'hover:bg-slate-100'
                  }`}
                >
                  <h3 className="font-semibold text-zinc-800">{post.title}</h3>
                  <p className="text-sm text-slate-500 mt-1">{formatDate(post.publishedDate)}</p>
                </div>
              ))}
            </div>
          </aside>

          {/* --- RIGHT COLUMN: Content Display --- */}
          <main className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedPost._id.$oid} // This key triggers the animation on change
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                <article>
                  <div className="overflow-hidden rounded-lg mb-8">
                    <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-auto object-cover" />
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(selectedPost.publishedDate)}</span>
                  </div>
                  <h1 className="text-4xl font-bold text-zinc-800 mb-6">
                    {selectedPost.title}
                  </h1>
                  <div className="prose max-w-none text-slate-600 leading-relaxed">
                    {selectedPost.excerpt}
                  </div>
                  {/* We can add the full content here later */}
                </article>
              </motion.div>
            </AnimatePresence>
          </main>

        </div>
      </div>
    </div>
  );
};

export default BlogsPage;