const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("ecom", "root", "Bhaumik#0777", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  logging: false,
});

sequelize
  .authenticate()
  .then(() => console.log("✅ Database connected successfully."))
  .catch((err) => console.error("❌ Database connection error:", err));

module.exports = sequelize; // ✅ Ensure it's exported correctly
