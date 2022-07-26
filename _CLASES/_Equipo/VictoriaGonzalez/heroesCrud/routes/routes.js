import express from "express"

import {CreateHeroe, deleteHeroe, getAllHeroes, getHeroe, updateHeroe} from "../controllers/HeroesController.js"


const router = express.Router()
// get para llamar
router.get("/", getAllHeroes)
router.get("/:id", getHeroe)

// post para enviar información
router.post("/", CreateHeroe)

// put para actualizar
router.put("/:id", updateHeroe)

// usamos delete para eliminar
router.delete("/:id", deleteHeroe)

export default router