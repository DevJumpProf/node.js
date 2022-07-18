const express = require ("express")
const router = express.Router()

const heroesController = require ("../controllers/heroesController")

router.get("/",heroesController.index);
router.get("/:id",heroesController.personajes);
router.get("/:id/:bio?",heroesController.bio);

module.exports = router;