/* This file contains all routes of taskController */

/* require packages */
const express = require("express");

/* create router instance */
const Router = express.Router();

/* require controllers */
const taskController = require("../controllers/taskController");

/* create, read, update and delete task routers */
Router.get("/", taskController.getTask);

module.exports = Router;
