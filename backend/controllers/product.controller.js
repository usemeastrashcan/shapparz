import Product from "../models/product.model.js"
import mongoose from "mongoose"
import { uploadOnCloudinary } from "../utils/Cloudinary.js"
import slugify from "slugify"
import ApiError from "../utils/ApiError.js"

const createProduct = async(req, res)=>
{
    const {name, slug, description, price, quantity} = req.body
    if(
        [name, slug, description, price, quantity].some((field) => field?.trim()=== "")
    )
        {
            throw new ApiError(400, "All Fields Required")
        }

    // const localPhotoPath = await req.files?.photo[0]?.path

    // if(!localPhotoPath)
    //     {
    //         throw new ApiError(400, "No Photo Local Path")
    //     }

    // const photo = await uploadOnCloudinary(localPhotoPath)
    // if(!photo) throw new ApiError(500, "Photo not Uploaded to Cloudinary")
    
    let photo;
    if (req.files && req.files['photo']) {
        const file =req.files['photo'][0]
        photo = await uploadOnCloudinary(file.buffer);
    }

    console.log(photo)
    console.log(photo.url)

    const product = await Product.create({
        name,
        slug: slugify(name),
        description,
        price,
        quantity,
        photo: photo.url
    })

    res.status(201).send({message: "Product Created", product})
    
}

const getAllProducts = async(req, res)=>
{
    try {
        const products = await Product.find({}).select("-photo").limit(12).sort({createdAt: -1})
        if(!products)
            throw new ApiError(500, "Couldn't get Products")
        res.status(200).send({
            success: true,
            NoOfProducts: products.length,
            products,
            message: "Got Products"

        })
    } catch (error) {
        console.log(error)
        res.status(500).send(
            {
                success: false,
                error,
                message: "Error in Getting Products."
            }
        )
        
    }
}

const getSingleProduct = async(req,res)=>
{
    try {
        const product = await Product.findOne({slug: req.params.slug}).select("-photo")
        if(!product)
            throw new ApiError(500, "Couldn't get Product")
        res.status(200).send({
            success: true,
            product,
            message: "Got Product"
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).send(
            {
                success: false,
                error,
                message: "Error in Getting Single Product."
            }
        )
    }
}

const getPhoto = async(req, res)=>
{
    try {
        const Photo = await Product.findById(req.params.pid).select("photo")
        if(!Photo)
            throw new ApiError(500, "Couldn't get photo.")
        const photoUrl = Photo.photo
        res.status(200).send({
            success: true,
            photoUrl,
            message: "Got Photo"
        })
    } catch (error) {
        console.log(error)
        res.status(500).send(
            {
                success: false,
                error,
                message: "Error in Getting Photo."
            }
        )
    }
}

const deleteProduct = async (req, res) => {
    try {
      const result = await Product.findByIdAndDelete(req.params.pid).select("-photo");
  
      if (!result) {
        return res.status(404).send({
          success: false,
          message: "Product not found",
        });
      }
  
      res.status(200).send({
        success: true,
        message: "Product deleted successfully",
      });
    } catch (error) {
      console.error(error); // Use console.error for logging errors
      res.status(500).send({
        success: false,
        message: "Error while deleting product",
        error: error.message, // Send only the error message to avoid exposing internal details
      });
    }
  };
  

const updateProduct = async(req,res)=>
{
    const {name, slug, description, price, quantity} = req.body
    if(
        [name, slug, description, price, quantity].some((field) => field?.trim()=== "")
    )
        {
            throw new ApiError(400, "All Fields Required")
        }

    // const localPhotoPath = await req.files?.photo[0]?.path

    // if(!localPhotoPath)
    //     {
    //         throw new ApiError(400, "No Photo Local Path")
    //     }

    // const photo = await uploadOnCloudinary(localPhotoPath)
    // if(!photo) throw new ApiError(500, "Photo not Uploaded to Cloudinary")

    let photo;
    if (req.file) {
      photo = await uploadOnCloudinary(req.file.buffer);
    }

    const product = await Product.findByIdAndUpdate(
        req.params.pid,
        {
        name,
        slug: slugify(name),
        description,
        price,
        quantity,
        photo: photo?.url || ""
    },
{
    new: true
})

    res.status(201).send({message: "Product Updates", product})
    
}

export{
    createProduct,
    getAllProducts,
    getSingleProduct,
    getPhoto,
    deleteProduct,
    updateProduct
}