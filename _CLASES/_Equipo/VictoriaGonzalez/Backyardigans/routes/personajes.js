var express = require('express');
var router = express.Router();
const personajesController = require ("../controllers/personajesController")

router.get("/", personajesController.index)
router.get("/:id", personajesController.detalle)

module.exports = router;


