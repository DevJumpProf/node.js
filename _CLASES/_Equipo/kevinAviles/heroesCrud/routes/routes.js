import express from "express";
import { createHeroe, deleteHeroe, getAllHeores, getHeroe, updateHeroe } from "../controllers/HeroesController.js";

const router = express.Router();

router.get("/",getAllHeores);
router.get("/:id",getHeroe);
router.post("/",createHeroe);
router.put("/:id",updateHeroe);
router.delete("/:id",deleteHeroe)

export default router;