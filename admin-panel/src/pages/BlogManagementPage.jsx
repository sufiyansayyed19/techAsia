// src/pages/BlogManagementPage.jsx
import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BlogList from '../components/blogs/BlogList';
import BlogForm from '../components/blogs/BlogForm';
import { mockBlogs } from '../data/mockBlogs';
import logo from '../assets/logo.png';

const BlogManagementPage = () => {
  const [view, setView] = useState('list');
  const [blogs, setBlogs] = useState(mockBlogs);
  const [currentBlog, setCurrentBlog] = useState(null);

  const handleAddNew = () => {
    setCurrentBlog(null);
    setView('form');
  };

  const handleEdit = (blog) => {
    setCurrentBlog(blog);
    setView('form');
  };
  
  const handleCancel = () => {
    setView('list');
  };

  const handleSave = (blogData) => {
    if (blogData._id) {
      setBlogs(blogs.map(b => b._id === blogData._id ? blogData : b));
    } else {
      const newBlog = { ...blogData, _id: `blog_${Date.now()}` };
      setBlogs([...blogs, newBlog]);
    }
    setView('list');
  };
  
  const handleDelete = (blogId) => {
    if(window.confirm('Are you sure you want to delete this post?')) {
        setBlogs(blogs.filter(b => b._id !== blogId));
    }
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-8">
      <header className="flex justify-between items-center mb-8">
        <Link to="/"><img src={logo} alt="TechAsia Logo" className="h-12" /></Link>
        <h1 className="pl-5 md:pl-0 md:text-3xl font-bold text-orange-400">Blog Management</h1>
        <button onClick={handleAddNew} className="px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full font-semibold">Add New</button>
      </header>
      
      <main>
        <AnimatePresence mode="wait">
          {view === 'list' ? (
            <motion.div key="list" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
              <BlogList blogs={blogs} onEdit={handleEdit} onDelete={handleDelete} />
            </motion.div>
          ) : (
            <motion.div key="form" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
              <BlogForm blog={currentBlog} onSave={handleSave} onCancel={handleCancel} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default BlogManagementPage;