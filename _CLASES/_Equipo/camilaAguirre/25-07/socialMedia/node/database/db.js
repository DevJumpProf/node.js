// conexion a la base de datos


import Sequelize from "sequelize" /* esto es igual que guadar en una variable el require('') */

const db = new Sequelize('postdatabase', 'root','',{
    host : 'localhost', // decir cual va a ser el host
    dialect : "mysql", // la base de datos a utilizar
    port : 3306 // son los n° finales de lo que aparece en el main del mysql
}) // en db se guarda una nueva base de datos entre los () se guarda el nombre de la nueva base de datos, root seria el nombre de usuario(?), y las '' porque no tenemos contraseña


export default db 





