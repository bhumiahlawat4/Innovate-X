const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Product = require("./Product");
const User = require("./User");

const Rating = sequelize.define("Rating", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  stars: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, { timestamps: true });

Rating.belongsTo(User, { foreignKey: "userId" });
Rating.belongsTo(Product, { foreignKey: "productId" });

module.exports = Rating;
