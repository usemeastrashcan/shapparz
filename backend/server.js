import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import authRoutes from './routes/auth.routes.js'
import productRoutes from './routes/product.routes.js'
import cors from 'cors'
dotenv.config({path: './.env'})

const app = express()

//connectDB
import connectDB from './config/db.js'
connectDB()

const corsOptions = {
    origin: ["https://shapparz.vercel.app"],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true
}

//middlewares
app.use(express.json())
app.use(morgan('dev'))
app.use(cookieParser())
app.use(cors(
    corsOptions
))

//routes
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/products', productRoutes)

app.get('/', (req, res)=>
{
    res.status(201).send({message: "Server is Running"})
})

const PORT = process.env.PORT || 8080

app.listen(PORT, ()=>
{
    console.log(`Server is Running on Port, ${PORT}`)
})