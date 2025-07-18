import { Router } from 'express';
const router = Router();
import Journal from '../models/Journal.js'; 

// POST: Add a journal
router.post('/', async (req, res) => {
   console.log('POST request received:', req.body);
  try {
    const { title, entry,isPublic} = req.body;
    const newEntry = new Journal({ title, entry,isPublic});
    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET: Fetch all journals
router.get('/', async (req, res) => {
  try {
    const entries = await Journal.find().sort({ date: -1 });
    res.json(entries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
