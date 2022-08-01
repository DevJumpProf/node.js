const express = require('express');
const router = express.Router()

const conexion =  require('../database/db');

router.get('/',(req,res)=>{

    
    res.render('index');
});
router.get('/login',(req,res)=>{
    res.render('login');
});
router.get('/register',(req,res)=>{
    res.render('register');
});

module.exports  = router;