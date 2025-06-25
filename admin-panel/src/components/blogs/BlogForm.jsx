// src/components/blogs/BlogForm.jsx
import React, { useState, useEffect, useMemo } from 'react';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const BlogForm = ({ blog, onSave, onCancel }) => {
  const [title, setTitle] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');

  useEffect(() => {
    if (blog) {
      setTitle(blog.title);
      setPublishedDate(blog.publishedDate);
      setExcerpt(blog.excerpt);
      setContent(blog.content);
      setImagePreview(blog.image);
    } else {
      // Reset form
      setTitle('');
      setPublishedDate(new Date().toISOString().split('T')[0]); // Default to today
      setExcerpt('');
      setContent('');
      setImagePreview('');
    }
    setImageFile(null);
  }, [blog]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const blogData = { _id: blog?._id, title, publishedDate, excerpt, content, image: imagePreview };
    onSave(blogData, imageFile);
  };
  
  // This helps prevent the editor from re-rendering unnecessarily
  const editorOptions = useMemo(() => {
    return {
        spellChecker: false,
        minHeight: "250px",
        toolbar: ["bold", "italic", "heading", "|", "quote", "unordered-list", "ordered-list", "|", "link", "image", "|", "preview", "side-by-side", "fullscreen"],
    };
  }, []);

  return (
    <div className="bg-zinc-800 p-8 rounded-xl shadow-2xl border border-zinc-700">
      <h2 className="text-xl font-bold mb-6">{blog ? 'Edit Blog Post' : 'Add New Post'}</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Blog Title" className="w-full p-3 bg-zinc-700 rounded-md" required />
        <input type="date" value={publishedDate} onChange={e => setPublishedDate(e.target.value)} className="w-full p-3 bg-zinc-700 rounded-md" />
        
        <div>
          <h3 className="font-semibold mb-2">Cover Image</h3>
          {imagePreview && <img src={imagePreview} alt="Preview" className="w-48 h-auto object-cover p-2 bg-zinc-700 rounded-lg mb-4" />}
          <input type="file" onChange={handleFileChange} accept="image/*" className="block w-full text-sm text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-orange-500/20 file:text-orange-300"/>
        </div>

        <textarea value={excerpt} onChange={e => setExcerpt(e.target.value)} placeholder="Excerpt (Short Summary)" className="w-full p-3 bg-zinc-700 rounded-md" rows="3"></textarea>
        
        <div>
            <h3 className="font-semibold mb-2">Full Content (Markdown)</h3>
            <div className="md-editor-dark-theme">
                <SimpleMDE value={content} onChange={setContent} options={editorOptions} />
            </div>
        </div>
        
        <div className="flex justify-end gap-4 pt-4 border-t border-zinc-700">
          <button type="button" onClick={onCancel} className="px-6 py-2 bg-zinc-600 rounded-md">Cancel</button>
          <button type="submit" className="px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full font-semibold">Save Post</button>
        </div>
      </form>
    </div>
  );
};

export default BlogForm;