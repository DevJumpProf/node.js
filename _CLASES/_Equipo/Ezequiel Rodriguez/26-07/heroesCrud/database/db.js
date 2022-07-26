import sequelize from "sequelize"


const db = new sequelize("heroesdatabase","root", "",{
    host: "localhost",
    dialect: "mysql",
    port: 3306
})

export default db;