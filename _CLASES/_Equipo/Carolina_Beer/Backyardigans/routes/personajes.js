const express = require ("express")
const router = express.Router()


const personajesControllers= require ("../controllers/personajesControllers")
router.get("/",personajesControllers.main)

router.get('/:id', personajesControllers.show);


module.exports = router