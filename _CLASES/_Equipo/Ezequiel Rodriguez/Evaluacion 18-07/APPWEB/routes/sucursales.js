var express = require('express');
var router = express.Router();
const sucursalesController = require('../controllers/sucursalesController');

router.get('/', sucursalesController.index);
router.get('/:id', sucursalesController.show);


module.exports = router;
