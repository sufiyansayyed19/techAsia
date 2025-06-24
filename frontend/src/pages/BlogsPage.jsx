// src/pages/BlogsPage.jsx
import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar } from 'lucide-react';
import blogsData from '../data/blogsData.json'; // FIXED: Importing from the correct blogs.json file
import ReactMarkdown from 'react-markdown';


const BlogsPage = () => {
  const [selectedPost, setSelectedPost] = useState(blogsData[0]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // FIXED: The formatDate function now correctly accesses the nested .$date property
  const formatDate = (dateString) => {
  if (!dateString) return "Invalid Date";
  // The 'T00:00:00' part is added to prevent timezone issues
  // where the date might be interpreted as the previous day.
  return new Date(`${dateString}T00:00:00`).toLocaleDateString('en-US', {
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
      <section className="bg-slate-100 border-b border-slate-200 py-12">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-zinc-800">Tech Blog</h1>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Browse our articles on the left and read the full content on the right.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <aside className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-zinc-800 mb-6 pb-4 border-b border-slate-200">
              All Articles
            </h2>
            <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-4">
              {blogsData.map((post) => (
                // --- UPDATED: Added thumbnail images as requested ---
                <div
                  key={post._id.$oid}
                  onClick={() => setSelectedPost(post)}
                  className={`flex items-start gap-4 p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                    selectedPost._id.$oid === post._id.$oid
                      ? 'bg-orange-100'
                      : 'hover:bg-slate-100'
                  }`}
                >
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-16 h-16 object-cover rounded-md flex-shrink-0"
                  />
                  <div>
                    <h3 className="font-semibold text-zinc-800 text-sm leading-tight">{post.title}</h3>
                    <p className="text-xs text-slate-500 mt-1">{formatDate(post.publishedDate)}</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>

          <main className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedPost._id.$oid}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                <article>
                  <div className="overflow-hidden rounded-lg mb-8">
                    <img src={selectedPost.image} alt={selectedPost.title} className="w-[65rem] h-[20rem] object-cover" />
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(selectedPost.publishedDate)}</span>
                  </div>
                  <h1 className="text-3xl font-bold text-zinc-800 mb-6">
                    {selectedPost.title}
                  </h1>
                  {/* The `prose` class from the typography plugin will now style our markdown automatically */}
<div className="prose max-w-none text-slate-600 leading-relaxed">
  <ReactMarkdown>
    {/* Render the content if it exists, otherwise fall back to the excerpt */}
    {selectedPost.content || selectedPost.excerpt}
  </ReactMarkdown>
</div>
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