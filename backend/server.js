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
app.use(cors({
    origin: ["https://shapparz.vercel.app"],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Accept"]
}));

// Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/products', productRoutes);

app.get('/', (req, res) => {
    res.status(201).send({ message: "Server is Running" });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
