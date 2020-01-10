/* This file contains all task routes */

/* load required models */
const Task = require("../models/task.model");

/* get all task list */
exports.getAllTask = async (req, res) => {
  try {
    const task = await Task.find();
    if (task.length < 1) {
      return res.status(404).json({ message: "No Task found." });
    }
    res.status(200).json({ data: task, message: "Task details" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* get task by its id */
exports.getTaskById = async (req, res) => {
  try {
    const { taskId } = req.params;
    if (!taskId) {
      return res.status(204).json({ message: "Please send task id" });
    }
    const task = await Task.findById(taskId);
    if (!task) {
      return res.status(404).json({ message: "No task detail found." });
    }
    res.status(200).json({ message: "task detail", data: task });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* create new task */
exports.createTask = async (req, res) => {
  try {
    const { name } = req.body;

    if (req.user) {
      req.body.user_id = req.user._id;
    }

    /* user exists or not */
    const existedTask = await Task.findOne({
      name: name
    });

    /* if user already exist with name and company */
    if (existedTask) {
      return res.status(409).json({ message: "Task already exist" });
    }
    const task = await Task.create(req.body);
    res.status(200).json({ message: "Task created successfully", data: task });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* update task by its id */
exports.updateTask = async (req, res) => {
  try {
    const { taskId } = req.params;
    req.body.updated_at = new Date().toISOString();
    const updatedTask = await Task.findOneAndUpdate(
      { _id: taskId },
      { $set: req.body },
      { new: true }
    );
    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found." });
    }
    res.status(200).json({
      data: updatedTask,
      message: "Task updated successfully."
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* delete task by its id */
exports.deleteTask = async (req, res) => {
  try {
    const { taskId } = req.params;
    /* task which "is_deleted:false" will be null here */
    const task = await Task.findOne({
      _id: taskId,
      is_deleted: false
    });
    if (!task) {
      return res.status(404).json({ message: "Task not found." });
    }
    /* Update is_deleted flag to true for delete task */
    await Task.findOneAndUpdate(
      { _id: taskId },
      { $set: { is_deleted: true } },
      { new: true }
    );

    res.status(200).json({ message: "Task deleted successfully." });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
