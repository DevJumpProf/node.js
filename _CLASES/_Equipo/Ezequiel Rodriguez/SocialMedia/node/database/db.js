import sequelize from "sequelize";

// Instancio una nueva base de datos
                        // Nombre DB, usuario, contraseña
const db = new sequelize("postdatabase","root","",{
    host: "localhost",
    dialect: "mysql",
    port: 3306
});

export default db