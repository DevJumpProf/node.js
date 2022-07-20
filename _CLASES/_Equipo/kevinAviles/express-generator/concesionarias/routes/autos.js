const express = require('express');
const router = express.Router();
const autosController = require('../controllers/autosController'); 
router.get('/',autosController.index);
router.get('/:marca',autosController.marcaAuto);
router.get('/:marca/:dato');

module.exports = router;