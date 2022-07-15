var express = require('express');
var router = express.Router();

const {main, show} = require('../controllers/personajesControllers')

/* GET users listing. */
router.get('/', main );
router.get('/:id', show);

module.exports = router;
