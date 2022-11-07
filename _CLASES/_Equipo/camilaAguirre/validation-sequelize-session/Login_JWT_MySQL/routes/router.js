const express = require('express')
const router = express.Router()
const upImgAvatar = require('../middleware/upImgAvatar')
const authController = require('../controllers/authController')
const registerValidator = require('../validations/registerValidator')
const userCheck = require('../middleware/userCheck')
/* const loginValidator = require('../validations/loginValidator') */


//router para las vistas
router.get('/', authController.isAuthenticated, (req, res)=>{    
    res.render('index', {user : req.user})
})
router.get('/login', (req, res)=>{
    res.render('login', {alert:false})
})
router.get('/register', (req, res)=>{
    res.render('register')
})



//router para los métodos del controller
router.post('/register',upImgAvatar.any(),registerValidator,authController.register)  /* en la ruta se debe indicar la subida de archivos */
router.post('/login', authController.login)
router.get('/logout', authController.logout)
router.get('/allUsers',authController.isAuthenticated,authController.getAllUsers)
router.get('/user/:id',authController.isAuthenticated,authController.getUser)
router.get('/updateUser/:id',authController.isAuthenticated,authController.updateUser)
router.put('/updateUser/:id',upImgAvatar.any(),userCheck,authController.processUpdateUser)
router.delete('/deleteUser/:id',/* userCheck, */authController.deleteUser)

module.exports = router