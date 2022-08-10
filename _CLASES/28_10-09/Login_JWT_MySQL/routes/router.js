const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')
const uploadImage = require ("../middlewares/uploadImage.js")
const {check,validationResult,body}= require ("express-validator")

//router para las vistas
router.get('/', authController.isAuthenticated, (req, res)=>{    
    res.render('index', {user:req.user})
})
router.get('/login', (req, res)=>{
    res.render('login', {alert:false})
})
router.get('/register', (req, res)=>{
    res.render('register')
})


//router para los métodos del controller
router.post('/register',uploadImage.any(),[
    check("name").isLength(),
    check("user").isLength({min:5}).withMessage("El Campo user debe estar completo con un minimo de 5 caracteres"),
    check("pass").isLength({min:8}).withMessage("la Contraseña debe estar completa con un minimo de 8 caracteres"),
], authController.register)
router.post('/login', authController.login)
router.get('/logout', authController.logout)

module.exports = router