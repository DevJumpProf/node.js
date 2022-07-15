var express = require('express');
var router = express.Router();
const personajesController = require('../controllers/personajesController');

/* GET users listing. */
router.get('/', personajesController.index);
router.get('/:id?', personajesController.id);

module.exports = router;