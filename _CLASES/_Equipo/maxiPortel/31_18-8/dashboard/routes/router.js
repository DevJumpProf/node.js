const express = require('express');
const { vistaPrincipal, vistaTables, vistaNotifications } = require('../controllers/pageController.js');
const { loginUser, createUser, deleteUser } = require('../controllers/userController.js');
const router = express.Router();

//VISTAS
router.get('/', vistaPrincipal);
router.get('/tables', vistaTables);
router.get('/notifications', vistaNotifications)

//Prueba de CRUD
/* router.get('/login'); */
router.post('/login', loginUser);
router.post('/register', createUser);
router.delete('/user/:id', deleteUser);

module.exports = router;