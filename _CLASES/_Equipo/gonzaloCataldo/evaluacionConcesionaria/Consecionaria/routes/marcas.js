var express = require('express');
var router = express.Router();
var marcasController = require("../controllers/marcasController")

router.get('/', marcasController.marcas);
router.get('/:marca', marcasController.marca);

module.exports = router;
