import express from "express";
import { getAllHeroes,getHeroe,createHeroe,updateHeroe,deleteHeroe } from "../controllers/HeroesController.js";

const heroeRoutes = express.Router();

heroeRoutes.get("/", getAllHeroes);
heroeRoutes.get("/:id", getHeroe);

heroeRoutes.post("/", createHeroe);

heroeRoutes.put("/:id", updateHeroe);

heroeRoutes.delete("/:id", deleteHeroe);

export default heroeRoutes;