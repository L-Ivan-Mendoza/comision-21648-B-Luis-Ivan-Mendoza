const { Sequelize } = require("sequelize");
const sequelize = new Sequelize('crud-proyecto-final', 'root', "", {
    host: "localhost",
    dialect: "mysql"
});

module.exports = { sequelize };