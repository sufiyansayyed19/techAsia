import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes.js';
import authRoutes from './routes/authRoutes.js'; // 1. IMPORT the new routes

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Basic route to check if server is running
app.get('/', (req, res) => {
  res.send('TechAsia Backend API is running!');
});

// Use Routes
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes); // 2. USE the new routes

// Connect to MongoDB
const connectDB = async () => {
  // ... (rest of the file is unchanged)
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

connectDB();

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));