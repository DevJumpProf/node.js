const express = require('express');
const router = express.Router();

//Rutas web
router.get('/', (req, res) => {
    //console.log(__dirname);
    res.render('index', {titulo: 'Inicio'});
});

router.get('/servicios', (req,res) =>{
    res.render('servicios', {tituloServicios: 'Servicios'});
});

router.get('/contacto', (req,res) => {
    res.render('contacto', {tituloContacto: 'Mensaje de contacto'});
});
module.exports = router;