const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/reviewController");

// ✅ Get all reviews
router.get("/", reviewController.getReviews);

// ✅ Create a new review
router.post("/", reviewController.createReview);

module.exports = router;
