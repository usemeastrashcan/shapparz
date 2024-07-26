// import {v2 as cloudinary} from 'cloudinary'
// import fs from 'fs'
// import dotenv from 'dotenv'

// dotenv.config()

// cloudinary.config({ 
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY, 
//     api_secret: process.env.CLOUDINARY_API_SECRET 
// })

// export const uploadOnCloudinary = async (localFilePath) =>
// {
//     try {
//         if(!localFilePath) 
//         {
//             console.log("LocalFilePath not found.")
//             return null
//         }
//         const response = await cloudinary.uploader.upload(localFilePath, {
//             resource_type: "auto"
//         })
//         console.log("File uploaded to cloudinary successfully.")

//         fs.unlinkSync(localFilePath , (err)=>
        
//         {
//             if(err) console.log("Failed to delete local file, ", err)
//         })
//         return response

//     } catch (error) {
//         fs.unlinkSync(localFilePath)
//         console.log("Error in Uploading to Cloudinary, ", error)
//         return null
//     }
// }

import { v2 as cloudinary } from "cloudinary";
import streamifier from "streamifier";
import dotenv from 'dotenv'
dotenv.config()

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary = (fileBuffer) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { resource_type: "auto" },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    );

    streamifier.createReadStream(fileBuffer).pipe(uploadStream);
  });
}

export { uploadOnCloudinary };