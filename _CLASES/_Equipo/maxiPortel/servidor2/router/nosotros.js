const express = require('express');
const router = express.Router()  //pedimos express y router.
const nosotrosControllers = require('../controllers/nosotrosControllers'); //creamos una variable para utilizar los controllers de esta página. Allí vamos a crear la lógica y las llamadas para dicho "link" en el servidor

router.get('/', nosotrosControllers.index) //declaramos el get sobre nosotros(lo nombramos como index porque esta declarado en APP que ya estamos en nosotros, este sería el index de 'nosotros)
//ademas le pasamos por parametro la constante creada que nos linkea con los controladores de la pagina

module.exports = router; //exportamos esto para llevarlo a app.js