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

export const getPost = async (req: any, res: any) => {
    const { id } = req.params;

    try {
        const post = await PostMessage.findById(id);

        res.status(200).json(post);
    } catch (error: any) {
        res.status(404).json({ message: error.message })
    }
}

export const getPostsBySearch = async (req: any, res: any) => {
    const { searchQuery, tags } = req.query
    try {
        const title = new RegExp(searchQuery, 'i');

        const posts = await PostMessage.find({ $or: [ { title }, { tags: { $in: tags.split(',') }} ] });

        res.json({ data: posts });
    } catch (error: any) {
        res.status(404).json({ message: error.message })
    }
}

export const createPost = async (req: any, res: any) => {
    const post = req.body;

    const newPostMessage = new PostMessage({ ...post, creator: req.userId, createdAt: new Date().toISOString() })

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage);
    } catch (error: any) {
        res.status(409).json({ message: error.message });
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

    await PostMessage.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}