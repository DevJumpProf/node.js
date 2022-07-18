const express = require ("express");
const router = express.Router();

const backController = require ("../controller/backController");

router.get("/",backController.index);
router.get ("/:id?", backController.tipo);
router.get("/:id/:bio?", backController.bio);

module.exports = router
