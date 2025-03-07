const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Country = require("./Country");

const State = sequelize.define("State", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, { timestamps: true });

State.belongsTo(Country, { foreignKey: "countryId" });
Country.hasMany(State, { foreignKey: "countryId" });

module.exports = State;
