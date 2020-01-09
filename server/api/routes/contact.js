/* This file contains all routes of contactController */

/* require packages */
const express = require("express");

/* create router instance */
const Router = express.Router();

/* require controllers */
const authController = require("../controllers/authController");
const contactController = require("../controllers/contactController");

/* create, read, update and delete contact routers */
Router.get("/", contactController.getAllContact);
Router.get(
  "/:contactId",
  authController.checkAuth,
  contactController.getContactById
);
Router.post(
  "/create",
  authController.checkAuth,
  contactController.createContact
);
Router.put(
  "/update/:contactId",
  authController.checkAuth,
  contactController.updateContact
);
Router.delete(
  "/delete/:contactId",
  authController.checkAuth,
  contactController.deleteContact
);

module.exports = Router;
