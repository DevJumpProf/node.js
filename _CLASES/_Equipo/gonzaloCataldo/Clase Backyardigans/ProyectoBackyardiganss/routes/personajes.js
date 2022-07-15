var express = require('express');
var router = express.Router();

var personajesController = require("../controllers/personajesController") //Guardamos en una variable la ruta del controlador

router.get('/', personajesController.mostrar); //Le decimos que va a mostrar en que ruta
router.get('/:id', personajesController.detalles);
router.get('/:id/bio', personajesController.biografia);

module.exports = router;
