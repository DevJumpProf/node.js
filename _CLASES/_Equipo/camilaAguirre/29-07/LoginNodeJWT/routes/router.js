const express = require('express');
const router = express.Router();

/* const conexion = require('../database/db.js'); */ // lo usanos para probar la conexion con al base de datos

router.get('/',(req,res) => {
    /* conexion() */
    res.render('index')
});
router.get('/login',(req,res) => {
    res.render('login')
});
router.get('/register',(req,res) => {
    res.render('register')
});

module.exports = router;