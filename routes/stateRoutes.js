const express = require("express");
const router = express.Router();
const stateController = require("../controllers/stateController");

// ✅ Get all states
router.get("/", stateController.getStates);

// ✅ Create a new state
router.post("/", stateController.createState);

module.exports = router;
