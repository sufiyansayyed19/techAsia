// controllers/productController.js
import Product from '../models/Product.js';
import cloudinary from '../config/cloudinary.js';
import DatauriParser from 'datauri/parser.js';
import path from 'path';

const parser = new DatauriParser();

// --- Helper function to format the buffer from multer ---
const formatBuffer = (file) => {
  return parser.format(path.extname(file.originalname).toString(), file.buffer).content;
}

// @desc    Fetch all products
// @route   GET /api/products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Create a product
// @route   POST /api/products
export const createProduct = async (req, res) => {
  const { title, slug, description, additionalFeatures, technicalDetails } = req.body;
  
  try {
    let imageUrl = '/images/default.png'; // Default image if none is uploaded

    if (req.file) {
      // 1. Format the file buffer
      const file = formatBuffer(req.file);
      // 2. Upload to Cloudinary
      const result = await cloudinary.uploader.upload(file, { folder: 'techasia_products' });
      // 3. Get the secure URL
      imageUrl = result.secure_url;
    }
    
    const product = new Product({
      title, slug, description, image: imageUrl,
      additionalFeatures: JSON.parse(additionalFeatures),
      technicalDetails: JSON.parse(technicalDetails)
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);

  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error creating product', error: error.message });
  }
};

// @desc    Update a product
// @route   PUT /api/products/:id
export const updateProduct = async (req, res) => {
  const { title, slug, description, additionalFeatures, technicalDetails } = req.body;
  
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Update text fields
    product.title = title;
    product.slug = slug;
    product.description = description;
    product.additionalFeatures = JSON.parse(additionalFeatures);
    product.technicalDetails = JSON.parse(technicalDetails);
    
    // If a new file is uploaded, upload it to Cloudinary and update the URL
    if (req.file) {
      const file = formatBuffer(req.file);
      const result = await cloudinary.uploader.upload(file, { folder: 'techasia_products' });
      product.image = result.secure_url;
    }

    const updatedProduct = await product.save();
    res.json(updatedProduct);

  } catch (error) {
    res.status(400).json({ message: 'Error updating product', error: error.message });
  }
};


// @desc    Delete a product
// @route   DELETE /api/products/:id
export const deleteProduct = async (req, res) => {
    // Note: In a real app, you might want to delete the image from Cloudinary here as well.
    // For now, we will just delete the database record.
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
            await product.deleteOne();
            res.json({ message: 'Product removed' });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};