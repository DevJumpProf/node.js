// importamos la conexion a la bd
import db from "../database/db.js";

// importamos sequelize

import { DataTypes } from "sequelize";

const PostModel = db.define("posts",{
    title:{type:DataTypes.STRING},
    content:{type:DataTypes.STRING},
})

export default PostModel
