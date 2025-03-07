const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");

// Routes for cart actions
router.post("/add", cartController.addToCart);
router.get("/:userId", cartController.getCartItems);
router.put("/update/:cartId", cartController.updateCartItem);
router.delete("/remove/:cartId", cartController.removeCartItem);

module.exports = router;
