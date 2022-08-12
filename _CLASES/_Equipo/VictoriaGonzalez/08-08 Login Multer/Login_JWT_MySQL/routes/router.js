const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')
const upload = require('../middleware/uploadImages.js')
const validations = require('../validations/validationsRegister.js')



router.get('/', authController.login, (req, res)=>{    
    res.render('index', {user:req.user})
    console.log(req.user)
})
router.get('/login', (req, res)=>{
    res.render('login', {alert:false})
})
router.get('/register',(req, res)=>{
    res.render('register')
})


//router para los métodos del controller
router.post('/register', upload.any(upload), validations, authController.CreateUser)
router.post('/login', authController.login)
/* router.get('/logout', authController.logout)*/

module.exports = router