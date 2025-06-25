// index.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes.js';
// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors()); // Allows requests from other origins
app.use(express.json()); // Parses incoming JSON requests

// Basic route to check if server is running
app.get('/', (req, res) => {
  res.send('TechAsia Backend API is running!');
});




// Connect to MongoDB
const connectDB = async () => {
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