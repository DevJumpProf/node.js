const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController.js')
const uploadUser = require("../middlewares/uploadUserAvatar.js")
const registerValidator = require('../validations/registerValidator.js')


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
// REGISTRO / Express-validator
router.post('/register', uploadUser.any(), registerValidator, authController.register)

// INICIO SESION
router.post('/login', authController.login)

// CIERRE SESION
router.get('/logout', authController.logout)

module.exports = router;