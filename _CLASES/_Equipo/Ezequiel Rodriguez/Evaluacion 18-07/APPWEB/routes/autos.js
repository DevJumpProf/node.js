var express = require('express');
var router = express.Router();
const autosController = require('../controllers/autosController');

/* GET home page. */
router.get('/', autosController.index);
router.get('/:id', autosController.show);

module.exports = router;