var express = require('express');
var router = express.Router();
const marcasController = require('../controllers/marcasController');

/* FALTA ROUTER.GET */
router.get('/', marcasController.index);
router.get('/:id', marcasController.lista);


module.exports = router;