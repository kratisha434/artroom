const express = require('express');
const router = express.Router();
const Journal = require('../models/Journal'); 

// POST: Add a journal
router.post('/', async (req, res) => {
  try {
    const { title, content } = req.body;
    const newEntry = new Journal({ title, content });
    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET: Fetch all journals
router.get('/', async (req, res) => {
  try {
    const entries = await Journal.find();
    res.status(200).json(entries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
