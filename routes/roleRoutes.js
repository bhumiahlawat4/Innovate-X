const express = require("express");
const router = express.Router();
const roleController = require("../controllers/roleController");

// ✅ Get all roles
router.get("/", roleController.getRoles);

// ✅ Create a new role
router.post("/", roleController.createRole);

module.exports = router;
