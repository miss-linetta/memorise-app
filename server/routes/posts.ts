import express from 'express';
import { getPosts } from '../controllers/posts';
import { createPost, updatePost, deletePost, likePost } from '../controllers/posts';
import auth from '../middleware/auth';

const router = express.Router();

router.get('/', getPosts);
router.post('/',auth, createPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.delete('/:id/likePost', auth, likePost);

export default router;
