import express from "express";
const userRoutes = express.Router();

import { signin, signup } from "../controllers/user";

userRoutes.post("/signin", signin);
userRoutes.post("/signup", signup);

export default userRoutes;