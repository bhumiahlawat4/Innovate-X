const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./User");

const Order = sequelize.define("Order", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  totalAmount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("pending", "shipped", "delivered", "cancelled"),
    defaultValue: "pending",
  },
}, { timestamps: true });

Order.belongsTo(User, { foreignKey: "userId" });

module.exports = Order;
