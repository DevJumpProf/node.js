import express from "express"
import {createPost, deletePost, getAllPosts, getPost, updatePost} from "../controllers/PostController.js"

const router = express.Router()

// usamos get para llamar
router.get("/", getAllPosts)
router.get("/:id", getPost)

// usamos post cuando es para CREAR un post
router.post("/", createPost)

// usamos put o path para actualizar
router.put("/:id", updatePost)

// usamos delete para eliminar
router.delete("/:id", deletePost)

export default router