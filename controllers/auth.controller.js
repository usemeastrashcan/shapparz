import {hashPassword} from '../helpers/auth.helper.js'
import ApiError from '../utils/ApiError.js'
import { User } from '../models/user.model.js'
import { compare } from 'bcrypt'
import jwt from 'jsonwebtoken'

const registerUser = async(req, res)=>
{
    try {
        
        const {name, email, password, address, phoneNumber} = req.body
        if( [name, email, password, address, phoneNumber].some((field) => field?.trim()=== "") )
        {
        return res.status(400).send(
            {success: false,
            message: "All Fields Required for registration",
            error
        }
        )
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send({
                success: false,
                message: "Email is already in use"
            });
        }

        const hashedPassword = await hashPassword(password)
        if(!hashedPassword)
            throw new ApiError(500, "Password didn't hash properly.")

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            address,
            phoneNumber,
        })

        if(!user)
            throw new ApiError(500, "User did not create successfully.")

        res.status(201).send({
            success: true,
            message: "User Created Successfully.",
            user
        })

    } catch (error) {
        console.log(`Error in User Registration ${error}`)
        res.status(500).send({
            success: false,
            message: "Error in User Registration",
            error
        })
    }

}

const loginUser = async(req, res)=>
{
    try {

        const {email, password} = req.body
        if(!email || !password)
            throw new ApiError(400, "Both Fields are Required")

        const user = await User.findOne({email})
        if(!user)
            throw new ApiError(400, "No user on this email")

        const isPasswordCorrect = await compare(password, user.password)
        if(!isPasswordCorrect)
            throw new ApiError(400, "Invalid Email or Password.")

        const token = jwt.sign({_id: user?._id}, process.env.JWT_SECRET, {expiresIn: "7d"})
        if(!token)
            throw new ApiError(500, "No Token")

        const newUser = await User.findById(user._id).select("-password")


        const options = {
            httpOnly: true,
            secure: true
        }


        res.status(200)
        .cookie("token", token, options)
        .send({
            success: true,
            message: "Successful Login",
            user: newUser
            , token
        }   )
        
    } catch (error) {
        console.log("Error in Logging in")
        res.status(500).send({
            success: false,
            message: "Error in User Login",
            error
        })

    }
}

const test = (req, res)=>
{
    res.send("protected")
}

export 
{
    registerUser,
    loginUser,
    test,
}