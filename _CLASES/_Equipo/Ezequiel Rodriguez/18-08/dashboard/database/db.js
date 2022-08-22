const sequelize = require('sequelize');

// Instanciar base de datos
                        // Nombre BDD, Usuario, contraseña
const db = new sequelize('dashboard_node','root','',{
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = db;