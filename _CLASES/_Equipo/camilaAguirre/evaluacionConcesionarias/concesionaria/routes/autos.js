var express = require('express');
var router = express.Router();

const {index,marca,dato} = require('../controllers/autosControllers');

/* GET home page. */
router.get('/', index);
router.get('/:marca', marca);
router.get('/:marca/:dato', dato);

module.exports = router;