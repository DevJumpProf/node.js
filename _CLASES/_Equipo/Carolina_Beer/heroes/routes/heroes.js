const express = require ("express")
const router = express.Router()

const heroesController = require ("../controllers/heroesController")

router.get("/",heroesController.index)
router.get("/:id", heroesController.show)


module.exports = router
