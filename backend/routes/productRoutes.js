// routes/productRoutes.js
import express from 'express';
import { getProducts, createProduct } from '../controllers/productController.js';

const router = express.Router();

// This route will handle GET requests to /api/products
router.route('/').get(getProducts);

// This route will handle POST requests to /api/products
router.route('/').post(createProduct);

export default router;