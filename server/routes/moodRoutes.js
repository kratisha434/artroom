import express from 'express';
import Mood from '../models/Mood.js';

const router = express.Router();

// POST - save mood
router.post('/', async (req, res) => {
  const { mood, note } = req.body;
  try {
    const newMood = new Mood({ mood, note });
    await newMood.save();
    res.status(201).json(newMood);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET - fetch all moods
router.get('/', async (req, res) => {
  try {
    const moods = await Mood.find().sort({ createdAt: -1 });
    res.json(moods);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
