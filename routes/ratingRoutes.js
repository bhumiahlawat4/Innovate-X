const express = require("express");
const router = express.Router();
const ratingController = require("../controllers/ratingController");

// ✅ Create a new rating
router.post("/", ratingController.createRating);

// ✅ Get all ratings
router.get("/", ratingController.getRatings);

module.exports = router;
