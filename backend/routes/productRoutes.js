// routes/productRoutes.js
import express from 'express';
import { getProducts, createProduct, updateProduct, deleteProduct } from '../controllers/productController.js';
import multer from 'multer';
const router = express.Router();
// --- UPDATED: Use Memory Storage instead of Disk Storage ---
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.route('/').get(getProducts).post(upload.single('imageFile'), createProduct);
router.route('/:id').put(upload.single('imageFile'), updateProduct).delete(deleteProduct);


// This route will handle GET requests to /api/products
router.route('/').get(getProducts);

// This route will handle POST requests to /api/products
router.route('/').post(createProduct);

// This handles PUT and DELETE for URLs with an ID, like /api/products/12345
router.route('/:id').put(updateProduct).delete(deleteProduct);



export default router;