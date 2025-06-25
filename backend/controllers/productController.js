// controllers/productController.js
import Product from '../models/Product.js';

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
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
// @access  Private/Admin
export const createProduct = async (req, res) => {
  // For now, we get all data from the request body.
  // We will handle file uploads for the image later.
  const { title, slug, description, image, additionalFeatures, technicalDetails } = req.body;

  try {
    const product = new Product({
      title,
      slug,
      description,
      image, // This will be a URL
      additionalFeatures,
      technicalDetails,
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error creating product', error: error.message });
  }
};

// --- ADD THE NEW FUNCTIONS BELOW ---

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
export const updateProduct = async (req, res) => {
  const { title, slug, description, image, additionalFeatures, technicalDetails } = req.body;

  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      product.title = title;
      product.slug = slug;
      product.description = description;
      product.image = image;
      product.additionalFeatures = additionalFeatures;
      product.technicalDetails = technicalDetails;

      const updatedProduct = await product.save();
      res.json(updatedProduct);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(400).json({ message: 'Error updating product', error: error.message });
  }
};

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
export const deleteProduct = async (req, res) => {
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