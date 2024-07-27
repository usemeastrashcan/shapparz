import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import authRoutes from './routes/auth.routes.js';
import productRoutes from './routes/product.routes.js';
import connectDB from './config/db.js';

dotenv.config({ path: './.env' });

const app = express();

// Database connection
connectDB();

// Middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser());

// CORS Options
const corsOptions = {
    origin: 'https://shapparz.vercel.app', // Replace with your frontend domain
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
};

// Apply CORS middleware to specific routes
app.options('/api/v1/auth/*', cors(corsOptions)); // Preflight request for auth routes
app.use('/api/v1/auth', cors(corsOptions), authRoutes);

app.options('/api/v1/products/*', cors(corsOptions)); // Preflight request for product routes
app.use('/api/v1/products', cors(corsOptions), productRoutes);

// General route
app.get('/', cors(corsOptions), (req, res) => {
    res.status(201).send({ message: "Server is Running" });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
