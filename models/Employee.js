const sequelize = require("../config/database"); // ✅ Import sequelize correctly
const { DataTypes } = require("sequelize");

const Employee = sequelize.define("Employee", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  position: {
    type: DataTypes.STRING,
  }
}, { timestamps: true });

module.exports = Employee;
