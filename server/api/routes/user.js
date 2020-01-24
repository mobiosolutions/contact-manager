/* This file contains all routes of userController */

/* require packages */
const express = require("express");

/* create router instance */
const Router = express.Router();

/* require controllers */
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");

/* create, read, update and delete user routers */
Router.post("/signup", authController.signup);
Router.post("/signin", authController.signin);
Router.get("/signout", authController.signout);
Router.get("/profile", authController.checkAuth, userController.profile);
Router.get("/:userId", authController.checkAuth, userController.getUserById);
Router.put(
  "/update/:userId",
  //   authController.checkAuth,
  userController.updateUser
);
Router.delete(
  "/delete/:userId",
  authController.checkAuth,
  userController.deleteUser
);

module.exports = Router;
