// Importamos la conexion a la base de datos
import db from "../database/db.js";

// Importamos sequelize

import { DataTypes } from "sequelize";

const PostModel = db.define("post",{
    title: {type: DataTypes.STRING},
    content: {type: DataTypes.STRING}
})

export default PostModel;