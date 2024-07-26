import express from 'express'
import { isAdmin, verifyJWT } from '../middlewares/auth.middleware.js'
import { createProduct, deleteProduct, getAllProducts, getPhoto, getSingleProduct, updateProduct } from '../controllers/product.controller.js'
import { upload } from '../middlewares/multer.middleware.js'

const router = express.Router()

router.route('/create-product').post(
    upload.fields([
        {
            name: "photo",
            maxCount: 1
        }
    ]),
    verifyJWT,
    isAdmin,
    createProduct)

router.route('/update-product/:pid').put(
    upload.fields([
        {
            name: "photo",
            maxCount: 1
        }
    ]),
    updateProduct)

router.route('/get-products').get(getAllProducts)
router.route('/get-product/:slug').get(getSingleProduct)
router.route('/product-photo/:pid').get(getPhoto)
router.route('/delete-product/:pid').delete(deleteProduct)




export default router