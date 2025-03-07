const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const State = require("./State");

const Region = sequelize.define("Region", {
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

Region.belongsTo(State, { foreignKey: "stateId" });
State.hasMany(Region, { foreignKey: "stateId" });

module.exports = Region;
