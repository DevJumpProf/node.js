var express = require('express'); /* REQUIERE EXPRESS */
var router = express.Router(); /* GUARDA EL METODO ROUTER DE EXPRESS */

/* guardamos en una variable la direccion del modulo de los controladores del index, para tener todos los metodos exportados por ella */
const indexController = require('../controllers/indexController');

/* GET home page. */
router.get('/', indexController.index); /* llamados al metodo index guardado dentro del modulo exportado y guardado en la variable de indexController */

module.exports = router; /* EXPORTA LOS METODOS */
