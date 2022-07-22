const express = require('express');
const router = express.Router();
const autosController = require('../controllers/autosController'); 
router.get('/',autosController.indexAutos);
router.get('/:marca',autosController.marcaAuto);
router.get('/:marca/:dato?',autosController.datoMarca);

module.exports = router;