import express from 'express';

import { getPosts, getPostsBySearch, getPost, createPost, updatePost, deletePost } from '../controllers/posts';

const postRoutes = express.Router();
import auth from "../middleware/auth";

postRoutes.get('/search', getPostsBySearch);
postRoutes.get('/', getPosts);
postRoutes.get('/:id', getPost);

postRoutes.post('/', createPost);
postRoutes.patch('/:id', updatePost);
postRoutes.delete('/:id', deletePost);

export default postRoutes;