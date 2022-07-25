//importamos la conexion a la db
import db from "../database/db.js";

//importo sequelize

import { DataTypes } from "sequelize";

const PostModel = db.define("post",{
    title : {type:DataTypes.STRING},
    content:{type:DataTypes.STRING}
});

export default PostModel;