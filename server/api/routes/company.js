/* This file contains all routes of companyController */

/* require packages */
const express = require("express");

/* create router instance */
const Router = express.Router();

/* require controllers */
const companyController = require("../controllers/companyController");
const authController = require("../controllers/authController");

/* create, read, update and delete company routers */
Router.get("/", authController.checkAuth, companyController.getAllCompanies);
Router.get(
  "/:companyId",
  authController.checkAuth,
  companyController.getCompanyById
);
Router.post(
  "/create",
  authController.checkAuth,
  companyController.createCompany
);
Router.put(
  "/update/:companyId",
  authController.checkAuth,
  companyController.updateCompany
);
Router.delete(
  "/delete/:companyId",
  authController.checkAuth,
  companyController.deleteCompany
);
module.exports = Router;
