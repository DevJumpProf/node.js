const Sequelize = require('sequelize');

const db = new Sequelize('calendario', 'root', '',{
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = db;