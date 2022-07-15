var express = require('express');
var router = express.Router();
const personajesController = require ("../controllers/personajesController")

router.get("/personajes", personajesController.index)
router.get("personajes/nombre", personajesController.nombres)
module.exports = router;


