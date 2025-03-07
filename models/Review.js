const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Product = require("./Product");
const User = require("./User");

const Review = sequelize.define("Review", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  comment: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, { timestamps: true });

Review.belongsTo(User, { foreignKey: "userId" });
Review.belongsTo(Product, { foreignKey: "productId" });

module.exports = Review;
