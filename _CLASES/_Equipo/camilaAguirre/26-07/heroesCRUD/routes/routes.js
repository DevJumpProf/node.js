import express from 'express';
import { createHeroe, deleteHeroe, getAllHeroes, getHeroe, updateHeroe } from '../controllers/HeroesControllers.js';
const router = express.Router();

router.get('/', getAllHeroes);
router.get('/:id', getHeroe);
router.post('/',createHeroe);
router.put('/:id', updateHeroe);
router.delete('/:id', deleteHeroe);

export default router;

