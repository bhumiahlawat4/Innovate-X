const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Country = sequelize.define("Country", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, { timestamps: true });

module.exports = Country;
