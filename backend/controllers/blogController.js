import Blog from '../models/Blog.js';
import cloudinary from '../config/cloudinary.js';
import DatauriParser from 'datauri/parser.js';
import path from 'path';

const parser = new DatauriParser();

// Helper function to format the buffer from multer for Cloudinary
const formatBuffer = (file) => parser.format(path.extname(file.originalname).toString(), file.buffer).content;

// @desc    Fetch all blog posts
// @route   GET /api/blogs
export const getBlogs = async (req, res) => {
  try {
    // Sort by publishedDate in descending order (newest first)
    const blogs = await Blog.find({}).sort({ publishedDate: -1 });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Create a blog post
// @route   POST /api/blogs
export const createBlog = async (req, res) => {
  const { title, slug, excerpt, content, publishedDate } = req.body;
  
  try {
    let imageUrl;
    if (req.file) {
      const file = formatBuffer(req.file);
      const result = await cloudinary.uploader.upload(file, { folder: 'techasia_blogs' });
      imageUrl = result.secure_url;
    } else {
      return res.status(400).json({ message: 'Blog post image is required' });
    }
    
    const blog = new Blog({
      title, slug, excerpt, content, publishedDate,
      image: imageUrl,
    });

    const createdBlog = await blog.save();
    res.status(201).json(createdBlog);
  } catch (error) {
    if (error.code === 11000 && error.keyPattern.slug) {
      return res.status(400).json({ message: 'This URL slug already exists. Please use a unique one.' });
    }
    console.error(error);
    res.status(400).json({ message: 'Error creating blog post', error: error.message });
  }
};

// @desc    Update a blog post
// @route   PUT /api/blogs/:id
export const updateBlog = async (req, res) => {
  const { title, slug, excerpt, content, publishedDate } = req.body;
  
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog post not found' });
    }

    blog.title = title || blog.title;
    blog.slug = slug || blog.slug;
    blog.excerpt = excerpt || blog.excerpt;
    blog.content = content || blog.content;
    blog.publishedDate = publishedDate || blog.publishedDate;
    
    if (req.file) {
      const file = formatBuffer(req.file);
      const result = await cloudinary.uploader.upload(file, { folder: 'techasia_blogs' });
      blog.image = result.secure_url;
    }

    const updatedBlog = await blog.save();
    res.json(updatedBlog);
  } catch (error) {
    if (error.code === 11000 && error.keyPattern.slug) {
      return res.status(400).json({ message: 'This URL slug already exists. Please use a unique one.' });
    }
    res.status(400).json({ message: 'Error updating blog post', error: error.message });
  }
};

// @desc    Delete a blog post
// @route   DELETE /api/blogs/:id
export const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (blog) {
      // Future improvement: delete image from Cloudinary here
      await blog.deleteOne();
      res.json({ message: 'Blog post removed' });
    } else {
      res.status(404).json({ message: 'Blog post not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};