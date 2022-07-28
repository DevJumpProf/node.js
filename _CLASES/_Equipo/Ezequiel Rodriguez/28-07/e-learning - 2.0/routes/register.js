import express from "express";
import { index } from "../controllers/RegisterController.js";
const registerRoutes = express.Router();

registerRoutes.get("/", index);

export default registerRoutes;