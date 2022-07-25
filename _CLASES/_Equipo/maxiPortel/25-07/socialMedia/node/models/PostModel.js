//acá le decimos como está conformada nuestra base de datos

// 1° importamos la conexion a la base de datos(db)
import db from "../database/db.js";

// importamos sequelize
import { DataTypes } from "sequelize";

//Acá definimos la tabla
const PostModel = db.define("posts",{ //nombre de tabla "posts"
    title: {type:DataTypes.STRING}, //nombre de columna y tipo de dato
    content: {type:DataTypes.STRING}
});

export default PostModel;