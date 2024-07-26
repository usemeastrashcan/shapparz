import express from 'express'
import { isAdmin, verifyJWT } from '../middlewares/auth.middleware.js'
import { loginUser, registerUser, test } from '../controllers/auth.controller.js'

const router = express.Router()

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/test',verifyJWT,isAdmin, test)
router.get('/user-auth',verifyJWT, (req, res)=>{
    res.status(200).send({ok: true})})

router.get('/admin-auth',verifyJWT,isAdmin, (req, res)=>{
    res.status(200).send({ok: true})
} )


export default router