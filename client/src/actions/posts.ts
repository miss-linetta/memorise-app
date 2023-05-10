import * as api from '../api';
import { CREATE, DELETE, FETCH_ALL, LIKE, UPDATE } from '../constants';

export const getPosts = () => async (dispatch: any) => {
    try {
        const { data } = await api.fetchPosts();

        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error: any) {
        console.log(error.message)
    }
   
}

export const createPost = (post: any) => async (dispatch: any) => {
    try {
        const { data } = await api.createPost(post);

        dispatch({ type: CREATE, payload: data });
    } catch (error: any) {
        console.log(error.message)
    }
}

export const updatePost = (id: any, post: any) => async (dispatch: any) => {
    try {
        const { data } = await api.updatePost(id, post);

        dispatch({ type: UPDATE, payload: data });
    } catch (error: any) {
        console.log(error.message)
    }
}

export const deletePost = (id: any) => async (dispatch: any) => {
    try {
        await api.deletePost(id);

        dispatch({ type: DELETE, payload: id });
    } catch (error: any) {
        console.log(error)
    }
}

export const likePost = (id: any) => async (dispatch: any) => {
    try {
        const { data } = await api.likePost(id);

        dispatch({ type: LIKE, payload: data });
    } catch (error: any) {
        console.log(error)
    }
}