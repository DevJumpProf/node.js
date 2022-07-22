var express = require('express');
var router = express.Router();

const {index, show} = require('../controllers/marcasControllers');

/* GET home page. */
router.get('/', index);
router.get('/:marca', show);

module.exports = router;