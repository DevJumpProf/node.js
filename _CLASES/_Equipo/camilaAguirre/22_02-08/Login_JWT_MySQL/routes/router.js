const express = require('express')
const multer = require('multer')
const path = require('path'); /* se requiere path y se lo utiliza en la config. de multer */
const router = express.Router()

const authController = require('../controllers/authController')

//configuracion subida de archivos-multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
    /*     console.log(file) */
      cb(null, 'tmp/my-uploads') /* se indica en que carpeta se debera guardar los archivos */
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname)) /* con path indicamos que nos debe traer la extension del archivo subido */
    }
  })
  
  const upload = multer({ storage: storage })

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
router.post('/register',upload.any(),authController.register)  /* en la ruta se debe indicar la subida de archivos */
router.post('/login', authController.login)
router.get('/logout', authController.logout)

module.exports = router