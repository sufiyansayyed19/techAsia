// src/pages/BlogsPage.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import blogsData from '../data/blogsData.json';
import { useMediaQuery } from '../hooks/useMediaQuery'; // <-- Import the hook

import ArticleList from '../components/blog/ArticleList'; // <-- Import new component
import ArticleDetail from '../components/blog/ArticleDetail'; // <-- Import new component

const BlogsPage = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  // Set the first post as selected on desktop, but not on mobile
  useEffect(() => {
    if (isDesktop) {
      setSelectedPost(blogsData[0]);
    } else {
      setSelectedPost(null); // On mobile, start with no selection
    }
  }, [isDesktop]);

  return (
    <div className="bg-white min-h-screen">
      {/* === IMPROVED HEADER SECTION === */}
      {/* <section className="bg-zinc-800 border-b border-zinc-700 py-12"> */}
        {/* <div className="container mx-auto px-6 text-center"> */}
          {/* <h1 className="text-4xl font-bold text-white">Tech Blogs</h1> */}
          {/* This text now only shows on large screens */}
          {/* <p className="mt-3 text-slate-400 max-w-2xl mx-auto hidden lg:block"> */}
            
          {/* </p> */}
        {/* </div> */}
      {/* </section> */}

      <div className="container mx-auto px-6 py-10">
        {/* === DESKTOP LAYOUT (unchanged logic) === */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-12">
          <aside className="lg:col-span-1">
            <ArticleList
              posts={blogsData}
              selectedPost={selectedPost}
              onSelectPost={setSelectedPost}
            />
          </aside>
          <main className="lg:col-span-2">
            {selectedPost && <ArticleDetail post={selectedPost} />}
          </main>
        </div>

        {/* === MOBILE LAYOUT (new "drill-down" logic) === */}
        <div className="lg:hidden">
          <AnimatePresence mode="wait">
            {selectedPost ? (
              // If a post is selected, show only the detail view
              <motion.div
                key="detail"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.3 }}
              >
                <ArticleDetail
                  post={selectedPost}
                  onBack={() => setSelectedPost(null)} // Pass a function to go back
                />
              </motion.div>
            ) : (
              // Otherwise, show only the list
              <motion.div
                key="list"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
              >
                <ArticleList
                  posts={blogsData}
                  selectedPost={selectedPost}
                  onSelectPost={setSelectedPost}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;