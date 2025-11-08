const express = require('express');
const Skill = require('../models/Skill');

const router = express.Router();

router.get('/', async (req, res) => {
  const { search } = req.query;

  try {
    const filters = {};

    if (search) {
      filters.name = { $regex: search, $options: 'i' };
    }

    const skills = await Skill.find(filters).sort({ name: 1 });

    res.json(skills);
  } catch (error) {
    console.error('Error fetching skills:', error);
    res.status(500).json({ message: 'Failed to retrieve skills' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);

    if (!skill) {
      return res.status(404).json({ message: 'Skill not found' });
    }

    res.json(skill);
  } catch (error) {
    console.error('Error fetching skill by id:', error);
    res.status(500).json({ message: 'Failed to retrieve skill' });
  }
});

module.exports = router;

