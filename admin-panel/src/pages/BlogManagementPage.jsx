import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import BlogList from '../components/blogs/BlogList';
import BlogForm from '../components/blogs/BlogForm';
import { API_BASE_URL } from '../config/api';
import useAuthStore from '../store/authStore';
import logo from '../assets/logo.png';

const BlogManagementPage = () => {
  const [view, setView] = useState('list');
  const [blogs, setBlogs] = useState([]);
  const [currentBlog, setCurrentBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { userInfo } = useAuthStore();

  const getAuthHeader = () => {
    if (!userInfo?.token) return {};
    return { 'Authorization': `Bearer ${userInfo.token}` };
  };

  const fetchBlogs = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${API_BASE_URL}/blogs`);
      if (!response.ok) throw new Error('Failed to fetch blog posts');
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

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

  const handleSave = async (blogData, imageFile) => {
    const toastId = toast.loading('Saving blog post...');
    const isUpdating = !!blogData._id;
    const url = isUpdating ? `${API_BASE_URL}/blogs/${blogData._id}` : `${API_BASE_URL}/blogs`;
    const method = isUpdating ? 'PUT' : 'POST';

    const formData = new FormData();
    // Auto-generate slug from title if it's a new post and slug is empty
    const slug = isUpdating || blogData.slug 
        ? blogData.slug 
        : blogData.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

    formData.append('title', blogData.title);
    formData.append('slug', slug);
    formData.append('excerpt', blogData.excerpt);
    formData.append('content', blogData.content);
    formData.append('publishedDate', blogData.publishedDate);
    if (imageFile) {
      formData.append('imageFile', imageFile);
    }

    try {
      const response = await fetch(url, {
        method: method,
        headers: getAuthHeader(),
        body: formData,
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to save blog post');

      toast.success('Blog post saved successfully!', { id: toastId });
      await fetchBlogs();
      setView('list');
    } catch (error) {
      console.error("Save operation failed:", error);
      toast.error(error.message, { id: toastId });
    }
  };

  const handleDelete = async (blogId) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      const toastId = toast.loading('Deleting post...');
      try {
        const response = await fetch(`${API_BASE_URL}/blogs/${blogId}`, {
          method: 'DELETE',
          headers: getAuthHeader(),
        });
        if (!response.ok) throw new Error('Failed to delete post');
        
        toast.success('Post deleted successfully!', { id: toastId });
        await fetchBlogs();
      } catch (error) {
        console.error("Failed to delete post:", error);
        toast.error(error.message, { id: toastId });
      }
    }
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-8">
      <header className="flex justify-between items-center mb-8">
        <Link to="/"><img src={logo} alt="TechAsia Logo" className="h-12" /></Link>
        <h1 className="text-3xl font-bold text-orange-400">Blog Management</h1>
        <button onClick={handleAddNew} className="px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full font-semibold">Add New</button>
      </header>
      
      <main>
        {isLoading ? (
          <p className="text-center">Loading blog posts...</p>
        ) : (
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
        )}
      </main>
    </div>
  );
};

export default BlogManagementPage;