const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')
const upload = require("../middlewares/uploadImages.js")


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
router.post('/register',upload.any(upload), authController.register)
router.post('/login', authController.login)  
router.get('/logout', authController.logout)

module.exports = router