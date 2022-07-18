const express = require ("express")
const router = express.Router()

const indexController = require ("../controllers/indexController")

router.get("/", indexController.index)
router.get ("/creditos", indexController.creditos)

module.exports = router

