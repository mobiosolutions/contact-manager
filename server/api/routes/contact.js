/* This file contains all routes of contactController */

/* require packages */
const express = require("express");

/* create router instance */
const Router = express.Router();

/* require controllers */
const contactController = require("../controllers/contactController");

/* create, read, update and delete contact routers */
Router.get("/", contactController.getContact);

module.exports = Router;
