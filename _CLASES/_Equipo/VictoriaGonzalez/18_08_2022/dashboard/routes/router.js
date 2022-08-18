const express = require("express");

const {vistaPrincipal} = require("../controllers/PageControllers.js");

const router = express.Router()

router.get("/", vistaPrincipal)

module.exports = {routes:router}


