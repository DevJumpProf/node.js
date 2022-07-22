var express = require('express');
var router = express.Router();

const {index,show,sucursal} = require('../controllers/sucursalesController');

/* GET home page. */
router.get('/', index);
router.get('/:sucursal', show);

module.exports = router;