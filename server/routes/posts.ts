import express from 'express';
import { getPosts } from '../controllers/posts';
import { createPost, updatePost, deletePost, likePost } from '../controllers/posts';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.delete('/:id/likePost', likePost);

export default router;
