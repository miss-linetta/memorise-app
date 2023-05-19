require('dotenv').config({ path: './.env' });

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts';
import userRoutes from './routes/user';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/posts', postRoutes);
app.use('/user', userRoutes);

const CONNECTION_URL:string = process.env.CONNECTION_URL as string;
const PORT = process.env.PORT || 3000;

function start() {
  try {
    mongoose.connect(CONNECTION_URL);

    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
}

start();


