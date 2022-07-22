var express = require('express');
var router = express.Router();
const sucursalesController = require("../controllers/sucursalesController");



router.get('/sucursales', sucursalesController.sucursales)
router.get('/sucursales/:sucursal', sucursalesController.sucursal)

module.exports = router;