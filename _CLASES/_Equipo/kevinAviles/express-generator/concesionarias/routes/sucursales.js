const express = require('express');
const router = express.Router();
const sucursalesController = require('../controllers/sucursalesController');

router.get('/',sucursalesController.indexSucursales);
router.get('/:sucursal',sucursalesController.mostrarSucursal);

module.exports = router;
