//Require Sequelize
// Must install Sequelize, Mysql2 to use it
const Sequelize = require("sequelize")
//Declarate a new DB
//db name, user, password(empty in this case)
const db = new Sequelize("dashboard", "root", "", {
    host: "localhost",
    dialect: "mysql",
    port: 3306
})
// Export db
module.exports = db

