import { Router } from 'express';
const router = Router();
import Poetry from '../models/Poetry.js';

router.get('/test', (req, res) => {
  res.send('Poetry route working');
});


// Create new poem
router.post('/', async (req, res) => {
  try {
    const { title, poem} = req.body;
    const newPoem = new Poetry({ title, poem});
    await newPoem.save();
    res.status(201).json( {message: 'Poem saved successfully!'});
  } catch (error) {
    res.status(400).json({ message: 'Error saving poem', error });
  }
});

// Get all poems
router.get('/', async (req, res) => {
  try {
    const poems = await Poetry.find();
    res.json(poems);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching poems', error });
  }
});

export default router;
