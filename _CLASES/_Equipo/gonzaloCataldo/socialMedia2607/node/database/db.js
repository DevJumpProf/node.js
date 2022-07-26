import Sequelize from "sequelize"

// instancio una nueva BD
                           // nombre BD,usuario,contraseña
const db = new Sequelize("postdatabase","root","",{
    host : "localhost",
    dialect : "mysql",
    port:3306
})

export default db 