import express from "express";
import { createPost, deletePost, getAllPost, getPost, updatePost } from "../controllers/PostController.js";

const router = express.Router();

router.get("/",getAllPost);
router.get("/:id",getPost);
router.post("/",createPost);
router.put("/:id",updatePost);
router.delete("/:id",deletePost);

export default router;
