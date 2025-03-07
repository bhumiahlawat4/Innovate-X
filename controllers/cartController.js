const { Cart, User, Product } = require("../models");

// ✅ Add product to cart
exports.addToCart = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;

    if (!userId || !productId || !quantity) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Check if user and product exist
    const user = await User.findByPk(userId);
    const product = await Product.findByPk(productId);
    if (!user || !product) {
      return res.status(404).json({ message: "User or Product not found." });
    }

    // Check if product is already in cart
    let cartItem = await Cart.findOne({ where: { userId, productId } });
    if (cartItem) {
      cartItem.quantity += quantity;
      await cartItem.save();
    } else {
      cartItem = await Cart.create({ userId, productId, quantity });
    }

    res.status(201).json({ message: "Product added to cart.", cartItem });
  } catch (error) {
    res.status(500).json({ message: "Error adding to cart.", error: error.message });
  }
};

// ✅ Get all cart items for a user
exports.getCartItems = async (req, res) => {
  try {
    const { userId } = req.params;

    const cartItems = await Cart.findAll({
      where: { userId },
      include: [{ model: Product, attributes: ["id", "name", "price"] }],
    });

    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).json({ message: "Error fetching cart items.", error: error.message });
  }
};

// ✅ Update cart item quantity
exports.updateCartItem = async (req, res) => {
  try {
    const { cartId } = req.params;
    const { quantity } = req.body;

    const cartItem = await Cart.findByPk(cartId);
    if (!cartItem) {
      return res.status(404).json({ message: "Cart item not found." });
    }

    cartItem.quantity = quantity;
    await cartItem.save();

    res.status(200).json({ message: "Cart updated successfully.", cartItem });
  } catch (error) {
    res.status(500).json({ message: "Error updating cart.", error: error.message });
  }
};

// ✅ Remove product from cart
exports.removeCartItem = async (req, res) => {
  try {
    const { cartId } = req.params;

    const cartItem = await Cart.findByPk(cartId);
    if (!cartItem) {
      return res.status(404).json({ message: "Cart item not found." });
    }

    await cartItem.destroy();
    res.status(200).json({ message: "Product removed from cart." });
  } catch (error) {
    res.status(500).json({ message: "Error removing cart item.", error: error.message });
  }
};
