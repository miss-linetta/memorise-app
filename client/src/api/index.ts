import axios from "axios";

const url = 'http://localhost:3000/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost: any) => axios.post(url, newPost);
export const updatePost = (id: any, dataPost: any) => axios.patch(`${url}/${id}`, dataPost);
export const deletePost = (id: any) => axios.patch(`${url}/${id}`);
export const likePost = (id: any) => axios.patch(`${url}/${id}/likePost`);