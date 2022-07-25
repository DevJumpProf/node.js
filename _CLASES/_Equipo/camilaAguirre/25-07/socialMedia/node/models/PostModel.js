// importamos la conexion a la bd

import db from "../database/db.js"; // poner siempre el .js para que no haya problemas mas adelante

// importamos de sequelize 

import { DataTypes } from "sequelize";


// definimos la conexion a la bd, representamos la tabla

// no hace falta definir el id o el createat o updateat porque se modifican solas, en cambio si debemos definir aquello que completamos nosotros
db.define('posts',{ // tabla debe ir en plural el modelo va en singular
    title: {type: DataTypes.STRING},
    content : {type: DataTypes.STRING},
})

export default PostModel