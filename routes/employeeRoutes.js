const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeeController");

// ✅ Get all employees
router.get("/", employeeController.getAllEmployees);

// ✅ Create a new employee
router.post("/", employeeController.createEmployee);

module.exports = router;
