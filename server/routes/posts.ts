import express from 'express';

import { getPosts, getPostsBySearch, getPost, createPost, updatePost, deletePost } from '../controllers/posts';

const router = express.Router();
import auth from "../middleware/auth";

router.get('/search', getPostsBySearch);
router.get('/', getPosts);
router.get('/:id', getPost);

router.post('/', auth, createPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);

export default router;