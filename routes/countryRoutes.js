const express = require("express");
const router = express.Router();
const countryController = require("../controllers/countryController");

// Routes for country actions
router.get("/", countryController.getAllCountries);
router.post("/", countryController.createCountry);

module.exports = router;
