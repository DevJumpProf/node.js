const express = require ('express');
const router = express.Router();

const personajesController = require ("../controllers/personajesController")

router.get("/", personajesController.index)
router.get("/:id",personajesController.detalle)
router.get("/:id/:ok?",personajesController.bio)

module.exports = router;