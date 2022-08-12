const Sequelize = require('sequelize');

const db = new Sequelize('login_node_jwt','root','',{
    host: "localhost",
    dialect: "mysql",
    port: 3306
});

module.exports = db;