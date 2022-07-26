import express from "express"
import { CreateHeroe, deleteHeroe, getAllHeroes, GetHeroe, updateHeroe } from "../controllers/HeroesControllers.js"
const router = express.Router()

router.get ("/",getAllHeroes)
router.get ("/:id",GetHeroe)
router.post("/",CreateHeroe)
router.put ("/:id",updateHeroe)
router.delete("/:id", deleteHeroe)

export default router