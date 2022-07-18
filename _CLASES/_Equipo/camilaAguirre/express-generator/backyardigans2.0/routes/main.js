var express = require('express');
var router = express.Router();

const {index} = require('../controllers/mainControllers')

/* GET home page. */
router.get('/', index);

module.exports = router;
