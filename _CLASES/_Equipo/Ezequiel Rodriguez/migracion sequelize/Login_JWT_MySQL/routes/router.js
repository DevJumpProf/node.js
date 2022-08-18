import express from "express";
const router = express.Router();

import {register, login, isAuthenticated, logout, show, deleteUser, getUser, updateUser, userEdit} from '../controllers/authController.js'
import uploadUser from '../middlewares/uploadUserAvatar.js'
import registerValidator from '../validations/registerValidator.js';


//router para las vistas
// MOSTRAR USUARIOS
router.get('/', isAuthenticated, show)

router.get('/login', (req, res) =>{
    res.render('login', {alert: false})
})

router.get('/register', (req, res) =>{
    res.render('register')
})

router.get('/editUser/:id', getUser, userEdit)


//router para los métodos del controller
// REGISTRO / Express-validator
router.post('/register', uploadUser.any(), registerValidator, register)

// INICIO SESION
router.post('/login', login)

// ELIMINAR USUARIO
router.delete('/:id', deleteUser)

// EDITAR USUARIO
router.put('/editUser/:id', uploadUser.any(),updateUser, userEdit)

// ASIGNAR ROL
/* router.get('/', ) */

// CIERRE SESION
router.get('/logout', logout)

export default router;