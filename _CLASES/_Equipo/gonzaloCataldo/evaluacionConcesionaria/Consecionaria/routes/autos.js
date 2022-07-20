var express = require('express');
var router = express.Router();
var autosController = require("../controllers/autosController")

router.get('/', autosController.autos);

module.exports = router;
