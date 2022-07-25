import express from 'express';
const router = express.Router();

import {createPost, deletePost, getAllPosts, getPost, updatePost} from '../controllers/PostController.js';

// prestar atencion metodos http
router.get('/', getAllPosts);
router.get('/:id', getPost);
router.post('/', createPost);
router.put('/:id',updatePost);
router.delete('/:id', deletePost);

export default router;