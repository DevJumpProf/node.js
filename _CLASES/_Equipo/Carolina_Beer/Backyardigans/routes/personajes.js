const express = require ("express")
const router = express.Router()


const personajesControllers= require ("../controllers/personajesControllers")
router.get("/",personajesController.index)

router.get('/:id', show);


module.exports = router