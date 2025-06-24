import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Calendar, ArrowRight } from 'lucide-react';
import blogsData from '../data/blogs.json'; // Import the new simplified JSON

const BlogsPage = () => {
  // Helper function to format the date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-slate-100 border-b border-slate-200 py-12">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-zinc-800">Tech Blog</h1>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Insights, tutorials, and news from the world of electronics and automation.
          </p>
          <div className="mt-6 max-w-lg mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for articles..."
                className="w-full p-4 pl-12 border border-slate-300 rounded-full"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20 sm:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-16">
            {blogsData.map((post, index) => (
              <motion.div
                key={post._id.$oid}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
              >
                {/* Image */}
                <Link to="#" className="md:col-span-1 overflow-hidden rounded-lg">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </Link>

                {/* Content */}
                <div className="md:col-span-2">
                  <h2 className="text-2xl font-bold text-zinc-800 group-hover:text-orange-600 transition-colors duration-300">
                    <Link to="#">{post.title}</Link>
                  </h2>
                  <div className="flex items-center gap-2 text-sm text-slate-500 mt-2">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(post.publishedDate)}</span>
                  </div>
                  <p className="mt-4 text-slate-600 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link to="#" className="inline-flex items-center gap-2 mt-6 font-semibold text-orange-600">
                    Read More
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogsPage;