const express = require('express');
const router = express.Router();
const marcasController = require('../controllers/marcasController');
router.get('/',marcasController.indexMarca);
router.get('/:marca',marcasController.autosMarca);

module.exports = router;