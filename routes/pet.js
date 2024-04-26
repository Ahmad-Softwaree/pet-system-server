import express from "express";
import { body } from "express-validator";

import { addPet, deletePet, getPet, getPets, updatePet } from "../api/pet.js";
import {
  checkBody,
  hashPassword,
  passwordValidation,
} from "../middleware/validation/validation.js";
import { employeeMiddleware } from "../middleware/auth/employee.js";

const petApp = express.Router();

petApp.get("/", employeeMiddleware, getPets);
petApp.get("/:id", employeeMiddleware, getPet);
petApp.post(
  "/",
  employeeMiddleware,
  body("name").notEmpty(),
  body("breed").notEmpty(),
  body("color").notEmpty(),
  body("age").notEmpty(),
  body("gender").notEmpty(),
  checkBody,

  addPet
);
petApp.put(
  "/:id",
  employeeMiddleware,
  body("name").notEmpty(),
  body("breed").notEmpty(),
  body("color").notEmpty(),
  body("age").notEmpty(),
  body("gender").notEmpty(),
  checkBody,

  updatePet
);
petApp.delete("/:id", employeeMiddleware, deletePet);

export default petApp;
