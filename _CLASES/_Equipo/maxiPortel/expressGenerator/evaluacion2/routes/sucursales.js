var express = require('express');
var router = express.Router();
const sucursalesController = require('../controllers/sucursalesController');

/* GET users listing. */
router.get('/', sucursalesController.index);
router.get('/:sucursal', sucursalesController.sucursal)

module.exports = router;