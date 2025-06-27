// routes/productRoutes.js
import express from 'express';
import { getProducts, createProduct, updateProduct, deleteProduct } from '../controllers/productController.js';

const router = express.Router();
// --- UPDATED: Use Memory Storage instead of Disk Storage ---
const storage = multer.memoryStorage();
const upload = multer({ storage });

// This route will handle GET requests to /api/products
router.route('/').get(getProducts);

// This route will handle POST requests to /api/products
router.route('/').post(createProduct);

// This handles PUT and DELETE for URLs with an ID, like /api/products/12345
router.route('/:id').put(updateProduct).delete(deleteProduct);



export default router;