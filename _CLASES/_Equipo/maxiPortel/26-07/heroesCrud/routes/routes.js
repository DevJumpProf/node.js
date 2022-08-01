import express from 'express';
const router = express.Router();
import { createHeroe, deleteHeroe, getAllHeroes, getHeroe, updateHeroe } from "../controllers/HeroesController.js";

router.get('/', getAllHeroes);
router.get('/:id', getHeroe);
router.get('/', createHeroe);
router.get('/:id', updateHeroe);
router.get('/:id', deleteHeroe);

export default router;