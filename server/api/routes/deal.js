/* This file contains all routes of dealController */

/* require packages */
const express = require("express");

/* create router instance */
const Router = express.Router();

/* require controller */
const authController = require("../controllers/authController");
const dealController = require("../controllers/dealController");

/* create, read, update and delete deal routers */
Router.get("/", dealController.getAllDeal);
Router.get("/:dealId", authController.checkAuth, dealController.getDealById);
Router.post("/create", authController.checkAuth, dealController.createDeal);
Router.put(
  "/update/:dealId",
  authController.checkAuth,
  dealController.updateDeal
);
Router.delete(
  "/delete/:dealId",
  authController.checkAuth,
  dealController.deleteDeal
);

module.exports = Router;
