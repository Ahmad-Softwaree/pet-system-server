import express from "express";
import { body } from "express-validator";
import { managerMiddleware } from "./../middleware/auth/manager.js";
import {
  deleteManager,
  getManager,
  getManagers,
  updateManager,
} from "../api/manager.js";
import {
  checkBody,
  hashPassword,
  passwordValidation,
} from "../middleware/validation/validation.js";

const managerApp = express.Router();

managerApp.get("/", managerMiddleware, getManagers);
managerApp.get("/:id", managerMiddleware, getManager);
managerApp.put(
  "/:id",
  managerMiddleware,
  body("name").notEmpty(),
  body("email").notEmpty().isEmail(),
  body("password").notEmpty(),
  body("phone").notEmpty(),
  body("age").notEmpty(),
  body("gender").notEmpty(),
  checkBody,
  passwordValidation,
  hashPassword,
  updateManager
);
managerApp.delete("/:id", managerMiddleware, deleteManager);

export default managerApp;
