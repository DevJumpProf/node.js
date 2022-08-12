import express from "express";
const router = express.Router();

import {isAuthenticated, login, logout, register} from '../controllers/authController.js'
import uploadUser from '../middlewares/uploadUserAvatar.js'
import registerValidator from '../validations/registerValidator.js';


//router para las vistas
router.get('/', isAuthenticated, (req, res)=>{    
    res.render('index', {user:req.user})
})
router.get('/login', (req, res)=>{
    res.render('login', {alert: false})
})
router.get('/register', (req, res)=>{
    res.render('register')
})

//router para los métodos del controller
// REGISTRO / Express-validator
router.post('/register', uploadUser.any(), registerValidator, register)

// INICIO SESION
router.post('/login', login)

// CIERRE SESION
router.get('/logout', logout)

export default router;