const sequelize = require("../config/database");

const User = require("./User");
const Country = require("./Country");
const State = require("./State");
const Region = require("./Region");
const Department = require("./Department");
const Employee = require("./Employee");
const Cart = require("./Cart");
const Rating = require("./Rating");
const Review = require("./Review");
const Role = require("./Role");
const Permission = require("./Permission");
const Product = require("./Product");
const Order = require("./Order");
const Category = require("./Category"); // Moved inside the correct module.exports

module.exports = {
  sequelize,
  User,
  Country,
  State,
  Region,
  Department,
  Employee,
  Cart,
  Rating,
  Review,
  Role,
  Permission,
  Product,
  Order,
  Category, // Included in the same export object
};
