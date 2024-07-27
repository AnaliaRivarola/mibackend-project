const Project = require('../models/Project.model');

const getAllProjects = async (req, res) => {
    try {
      const projects = await Project.find();
      res.json(projects);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  

const createProject = async (req, res) => {
  const { name, dueDate } = req.body;
  try {
    const newProject = new Project({ name, dueDate });
    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateProject = async (req, res) => {
  const { id, status } = req.params;
  try {
    const updatedProject = await Project.findByIdAndUpdate(id, { status }, { new: true });
    res.json(updatedProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteProject = async (req, res) => {
  const { id } = req.params;
  try {
    await Project.findByIdAndDelete(id);
    res.status(204).end();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getAllProjects,
  createProject,
  updateProject,
  deleteProject
};
