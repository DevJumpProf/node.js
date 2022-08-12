import sequelize from "sequelize";

// Instancio base de datos
                        // Nombre DB, usuario, contraseña
const db = new sequelize("login_node_jwt","root","",{
    host: "localhost",
    dialect: "mysql",
    port: 3306
});

export default db;