import mongoose from 'mongoose'

const connectDB = async(req, res)=>
{
try {
    const conn = await mongoose.connect(process.env.MONGO_URL)
    console.log(`MongoDB connected successfully. ${conn.connection.host}`)
} catch (error) {
    console.log(`Error Connecting database. ${error.message}`)
}
}

export default connectDB