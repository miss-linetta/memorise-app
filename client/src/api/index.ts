import axios from "axios";
import instance from "./instance";

export const fetchPosts = () => instance.get('/posts');
export const createPost = (newPost: any) => instance.post('/posts', newPost);
export const updatePost = (id: any, dataPost: any) => instance.patch(`/posts/${id}`, dataPost);
export const deletePost = (id: any) => instance.patch(`/posts/${id}`);
export const likePost = (id: any) => instance.patch(`/posts/${id}/likePost`);

export const signIn = (formData: any) => instance.post('/user/signin', formData);
export const signUp = (formData: any) => instance.post('/user/signup', formData);