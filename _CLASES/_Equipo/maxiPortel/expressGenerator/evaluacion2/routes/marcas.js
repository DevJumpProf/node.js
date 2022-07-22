const express = require('express');
const router = express.Router();
const marcasController = require('../controllers/marcasController');

router.get('/', marcasController.index);
router.get('/:marca', marcasController.marca)

module.exports = router;