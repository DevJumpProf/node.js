const express = require('express');
const router = express.Router();
const sucursalController = require('../controllers/sucursalesController');

router.get('/',sucursalController.index);
router.get('/:sucursal',sucursalController.mostrarSucursal);

module.exports = router;
