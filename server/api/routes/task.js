/* This file contains all routes of taskController */

/* require packages */
const express = require("express");

/* create router instance */
const Router = express.Router();

/* require controllers */
const authController = require("../controllers/authController");
const taskController = require("../controllers/taskController");

/* create, read, update and delete task routers */
Router.get("/", taskController.getAllTask);
Router.get("/:taskId", authController.checkAuth, taskController.getTaskById);
Router.post("/create", authController.checkAuth, taskController.createTask);
Router.put(
  "/update/:taskId",
  authController.checkAuth,
  taskController.updateTask
);
Router.delete(
  "/delete/:taskId",
  authController.checkAuth,
  taskController.deleteTask
);

module.exports = Router;
