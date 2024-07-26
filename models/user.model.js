import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:
    {
        type: String,
        required: true,
        trim: true

    },
    email:
    {
        type:String,
        required: true,
        unique: true,
        lowercase: true
    },
    password:
    {
        type: String,
        required: true,
    },
    address:
    {
        type: String,
        required: true
    },
    phoneNumber: 
    {
        type:String,
        required: true,
        unique: true
    },
    role:
    {
        type:Number,
        default: 0
    }
}, 
{
    timestamps: true
})

export const User = mongoose
.model('users', userSchema)