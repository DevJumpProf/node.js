const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController.js')
const uploadAvatar = require('../middleware/uploadAvatar.js');
const validatorRegister = require('../validations/validatorRegister.js');


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


//router para los métodos del controller
router.post('/register',uploadAvatar.any(), validatorRegister, authController.register)
router.post('/login', authController.login)
router.get('/logout', authController.logout)

module.exports = router