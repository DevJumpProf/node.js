// importamos la conexión a la bd
import db from "../database/db.js"

//importamos sequilize
import { DataTypes } from "sequelize";

const PostModel = db.define("post",{
    title:{type:DataTypes.STRING},
    content:{type: DataTypes.STRING},
});

export default PostModel

