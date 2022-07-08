const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
    res.render('index',{titulo:'Index pagina'})
})
router.get('/nosotros',(req,res)=>{
    res.render('nosotros',{
        titulo: 'Nosotros pagina'
    })
})
router.get('/registro',(req,res)=>{
    res.render('registro',{
        titulo:'Registro Pagina'
    })
})
router.get('/login',(req,res)=>{
    res.render('login',{
        titulo:'Login Pagina'
    })
})

module.exports = router;