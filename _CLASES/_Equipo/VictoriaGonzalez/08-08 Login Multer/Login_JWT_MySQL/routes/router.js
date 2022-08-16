const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')
const upload = require('../middleware/uploadImages.js')
const validations = require('../validations/validationsRegister.js')


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
router.get('/users', authController.isAuthenticated, authController.Users, (req, res)=>{    
    res.render('users', {user:req.user}) 
})


//router para los métodos del controller
router.post('/register',upload.any(upload), validations, authController.createUser)
router.post('/login', authController.login)  
router.get('/logout', authController.logout) 
router.get('/users', authController.isAuthenticated, authController.Users)
/* router.get('/update', authController.update ) */ 
router.delete('/delete/:id', authController.deleteUser)
router.get('/editUser/:id',authController.userEdit)
router.put('/editUser/:id',upload.any(),authController.processEditUser)
module.exports = router

