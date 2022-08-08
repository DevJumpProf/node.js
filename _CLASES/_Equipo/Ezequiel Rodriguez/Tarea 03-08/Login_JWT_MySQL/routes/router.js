const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController.js')
const multer = require("multer")
const path = require("path")

// Config Multer - DiskStorage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/img')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname)) // Sumar extension del archivo (path.extname())
    }
  })
  
const upload = multer({ storage: storage })


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
router.post('/register', upload.any(), authController.register)
router.post('/login', authController.login)
router.get('/logout', authController.logout)

module.exports = router