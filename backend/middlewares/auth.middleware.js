import jwt from 'jsonwebtoken'
import { User } from '../models/user.model.js'
import ApiError from '../utils/ApiError.js'

const verifyJWT = async(req, res, next)=>
{
    try {
        const token = req.cookies?.token || req.headers.authorization
        if(!token)
        {
            throw new ApiError(500, "Token Expired")
        }
    
        const decode = jwt.verify(token, process.env.JWT_SECRET)
        if(!decode)
            throw new ApiError(500, "Error in token Validation")

        req.user = decode
        next()
        
    } catch (error) {
        console.log(error)
    }
}

const isAdmin = async (req, res, next) => {
    try {
      const user = await User.findById(req.user._id).select("-password")
      if(!user)
        {
            throw new ApiError(500, "Could not get user")
        }
      if (user.role !== 1) {
        return res.status(401).send({
          success: false,
          message: "UnAuthorized Access",
        });
      } else {
        next();
      }
    } catch (error) {
      console.log(error);
      res.status(401).send({
        success: false,
        error,
        message: "Error in admin middelware",
      });
    }
  }

export{
    verifyJWT,
    isAdmin,
}

