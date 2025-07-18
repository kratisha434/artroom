import express, { json } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './db.js';
import journalRoutes from './routes/journalRoutes.js'; 
import poetryRoutes from './routes/poetryRoutes.js';
import moodRoutes from './routes/moodRoutes.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config();      
connectDB();        

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(json());

app.use('/api/journal', journalRoutes);
app.use('/api/poetry', poetryRoutes);
app.use('/api/mood', moodRoutes);
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
