const express = require("express");
const router = express.Router();
const regionController = require("../controllers/regionController");

// ✅ Get all regions
router.get("/", regionController.getRegions);

// ✅ Create a new region
router.post("/", regionController.createRegion);

module.exports = router;
