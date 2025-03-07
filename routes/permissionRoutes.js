const express = require("express");
const router = express.Router();
const permissionController = require("../controllers/permissionController");

// Routes for permissions
router.get("/", permissionController.getPermissions);
router.post("/", permissionController.createPermission);

module.exports = router;
