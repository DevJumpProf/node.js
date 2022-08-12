const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController.js')
const uploadAvatar = require('../middleware/uploadAvatar.js');
const validatorRegister = require('../validations/validatorRegister.js');
const session = require ("express-session")


//router para las vistas
router.get('/', authController.isAuthenticated, (req, res) => {
    res.render('index', { user: req.user })
})
router.get('/login', (req, res) => {
    res.render('login', { alert: false })
})
router.get('/register', (req, res) => {
    res.render('register')
})

// ruta de prueba session
router.get("/pruebaSession", function (req,res){
    if(req.session.numeroVisitas==undefined){
        req.session.numeroVisitas = 0;
    }
    req.session.numeroVisitas++
    res.send(`Session Numero ${req.session.numeroVisitas}`)
})

router.get('/numeroSession', (req, res) => {
    res.send(`Session Numero ${req.session.numeroVisitas}`)
})



//router para los métodos del controller
router.post('/register',uploadAvatar.any(), validatorRegister, authController.register)
router.post('/login', authController.login)
router.get('/logout', authController.logout)

module.exports = router