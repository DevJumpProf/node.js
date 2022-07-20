var express = require('express');
var router = express.Router();
var sucursalesController = require("../controllers/sucursalesController")

router.get('/', sucursalesController.sucursales);
router.get('/:sucursal', sucursalesController.sucursal);

module.exports = router;
