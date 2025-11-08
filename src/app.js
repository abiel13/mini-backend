const express = require('express');
const cors = require('cors');
const skillsRouter = require('./routes/skills');
const projectsRouter = require('./routes/projects');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/skills', skillsRouter);
app.use('/api/projects', projectsRouter);

module.exports = app;

