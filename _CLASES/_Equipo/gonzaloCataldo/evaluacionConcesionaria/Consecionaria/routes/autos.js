var express = require('express');
var router = express.Router();
var autosController = require("../controllers/autosController")

router.get('/', autosController.autos);
router.get('/:marca', autosController.marca);
router.get('/:marca/:anio', autosController.anio);
router.get('/:marca/:anio/:color', autosController.color);

module.exports = router;
