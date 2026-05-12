const express = require('express');
const Project = require('../models/Project');

const router = express.Router();

router.get('/', async (req, res) => {
  const { search, tool } = req.query;

  try {
    const filters = {};

    if (search) {
      const regex = { $regex: search, $options: 'i' };
      filters.$or = [{ name: regex }, { description: regex }];
    }

    if (tool) {
      filters.tools = tool;
    }

    const projects = await Project.find(filters).sort({ createdAt: -1 });

    res.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ message: 'Failed to retrieve projects' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.json(project);
  } catch (error) {
    console.error('Error fetching project by id:', error);
    res.status(500).json({ message: 'Failed to retrieve project' });
  }
});

module.exports = router;

