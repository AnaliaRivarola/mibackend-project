const express = require('express');
const router = express.Router();
const {
  getAllProjects,
  createProject,
  updateProject,
  deleteProject
} = require('../controllers/Project.controller');

router.get('/projects', getAllProjects);
router.post('/projects', createProject);
router.put('/projects/:id/:status', updateProject);
router.delete('/projects/:id', deleteProject);

module.exports = router;
