import mongoose from "mongoose";
import express from 'express';
import PostMessage from "../models/postMessage";

const router = express.Router();

export const getPosts = async (req: any, res: any) => {
    try {
        const postMessages = await PostMessage.find();

        console.log(postMessages);

        res.status(200).json(postMessages);
    } catch (error: any) {
        res.status(404).json({ message: error.message })
    }
}

export const createPost = async (req: any, res: any) => {
    const post = req.body;

    const newPost = new PostMessage(post);

    try {
        await newPost.save();

        res.status(200).json(newPost);
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
}

export const updatePost = async (req: any, res: any) => {
    const { id } = req.params;
    const { title, message, creator, selectedFile, tags } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req: any, res: any) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostMessage.findByIdAndDelete(id);

    res.json({ message: 'Post was deleted'})
}

export const likePost = async (req: any, res: any) => {
    const { id } = req.params;

    if (!req.userId) return res.json({ message: 'Unauthenticated' });
  
    const post = await PostMessage.findById(id);

    if (!post) {
        return res.status(404).send(`No post with id: ${id}`);
    }
  
    const index = post.likes.findIndex((id) => id === String(req.userId));

    if(index === -1) {
        post.likes.push(req.userId);
    } else {
        post.likes = post.likes.filter((id) => id !== String(req.userId));
    }

  
    const updatedPost = await PostMessage.findByIdAndUpdate(
      id,
      post,
      { new: true }
    );
    res.json(updatedPost);
  }
  