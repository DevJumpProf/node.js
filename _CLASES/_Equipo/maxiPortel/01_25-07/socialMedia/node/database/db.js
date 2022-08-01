//acá hacemos la conexion

//Forma de importar. Así declaramos que vamos a usar Sequelize
import Sequelize from "sequelize"

//instanciar o crear nueva base de datos(aunque ya viene una instanciada por defecto hacemos una nueva conexion)
const db = new Sequelize("postdatabase","root","",{ //nombre base de datos, usuario, contraseña de workbeanch
    host: "localhost",
    dialect: "mysql",
    port: 3306
});

//Forma de exportar
export default db;