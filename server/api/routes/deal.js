/* This file contains all routes of dealController */

/* require packages */
const express = require("express");

/* create router instance */
const Router = express.Router();

/* require controller */
const dealController = require("../controllers/dealController");

/* create, read, update and delete deal routers */
Router.get("/", dealController.getDeal);

module.exports = Router;
