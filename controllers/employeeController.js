const { Employee, Department, User } = require("../models");

// ✅ Get all employees with Department and User info
exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.findAll({
      include: [Department, User], // Include relations
    });
    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Create a new employee
exports.createEmployee = async (req, res) => {
  try {
    const { name, email, position, departmentId, userId } = req.body;
    const employee = await Employee.create({
      name,
      email,
      position,
      departmentId,
      userId: userId || null, // Ensure userId can be null
    });
    res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
