var express = require('express');
var router = express.Router();

const {detail} = require('../controllers/personajesControllers');

/* GET users listing. */
router.get('/:id', detail); /* el :id sirve para indicar que espera una accion a pasarse por url nosotros le declaramos por controller que debe esperar */

module.exports = router;
