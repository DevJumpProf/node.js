var express = require('express');
var router = express.Router();
const marcasController = require("../controllers/marcasController");

router.get('/marcas', marcasController.marcas)
router.get('/marcas/:marca', marcasController.marcas1)
module.exports = router;