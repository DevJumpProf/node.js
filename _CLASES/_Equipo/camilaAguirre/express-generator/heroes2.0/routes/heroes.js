var express = require('express');
var router = express.Router();

const {detail} = require('../controllers/heroesControllers');

/* GET users listing. */
router.get('/:id', detail);

module.exports = router;
