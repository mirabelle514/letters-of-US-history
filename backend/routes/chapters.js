import express from 'express';
import Chapter from '../models/Chapter.js';

const router = express.Router();

// Get all chapters, optionally filter by president
router.get('/', async (req, res) => {
  try {
    const filter = req.query.president ? { president: req.query.president } : {};
    const chapters = await Chapter.find(filter).sort({ createdAt: 1 });
    res.json(chapters);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single chapter by ID
router.get('/:id', async (req, res) => {
  try {
    const chapter = await Chapter.findById(req.params.id);
    if (!chapter) return res.status(404).json({ message: 'Chapter not found' });
    res.json(chapter);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get chapter by president name
router.get('/president/:president', async (req, res) => {
  try {
    const chapter = await Chapter.findOne({ president: req.params.president });
    if (!chapter) return res.status(404).json({ message: 'Chapter not found for this president' });
    res.json(chapter);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new chapter (for admin use)
router.post('/', async (req, res) => {
  try {
    const chapter = new Chapter(req.body);
    const newChapter = await chapter.save();
    res.status(201).json(newChapter);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a chapter (for admin use)
router.put('/:id', async (req, res) => {
  try {
    const chapter = await Chapter.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!chapter) return res.status(404).json({ message: 'Chapter not found' });
    res.json(chapter);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a chapter (for admin use)
router.delete('/:id', async (req, res) => {
  try {
    const chapter = await Chapter.findByIdAndDelete(req.params.id);
    if (!chapter) return res.status(404).json({ message: 'Chapter not found' });
    res.json({ message: 'Chapter deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
