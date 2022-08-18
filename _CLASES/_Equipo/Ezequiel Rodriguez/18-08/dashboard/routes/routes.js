const express = require("express");
const router = express.Router();
const vistaPrincipal = require("../controllers/pageController.js")

router.get("/", vistaPrincipal);

module.exports = router;