const express = require('express')
const router = express.Router()

//Controllers
const authController = require('../controllers/authController.js');
const { getAllUsers, updateUser, deleteUser, getUser} = require('../controllers/userController.js');

//Validator
const uploadAvatar = require('../middleware/uploadAvatar.js');
const validatorRegister = require('../validations/validatorRegister.js');

//router para las vistas
router.get('/', authController.isAuthenticated, (req, res) => {
    res.render('index', { user: req.user, title: 'Inicio'})
})
router.get('/login', (req, res) => {
    res.render('login', { alert: false })
})
router.get('/register', (req, res) => {
    res.render('register')
})
router.get('/listaUser', authController.isAuthenticated, getAllUsers)
router.get('/editProfile/:id', authController.isAuthenticated, getUser)

//ruta prueba session
router.get('/pruebaSession', (req,res) =>{
    if(req.session.numeroVisitas == undefined){
        req.session.numeroVisitas = 0;
    }
    req.session.numeroVisitas++
    res.send(`Sesion n° : ${req.session.numeroVisitas}`);
})


//router para los métodos del controller
router.post('/register',uploadAvatar.any(), validatorRegister, authController.register)
router.post('/login', authController.login)
router.get('/logout', authController.logout)


//Router edicion/eliminacion usuarios
router.put('/editUser/:id',uploadAvatar.any(),validatorRegister, updateUser) 
router.delete('/:id', deleteUser)


module.exports = router;