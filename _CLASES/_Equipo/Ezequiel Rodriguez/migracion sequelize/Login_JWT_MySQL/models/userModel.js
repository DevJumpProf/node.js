// Importamos la conexion a la base de datos
import db from "../database/db.js"

// Importamos sequelize
import {DataTypes} from "sequelize"

const userModel = db.define("users",{
    user: {type: DataTypes.STRING},
    name: {type: DataTypes.STRING},
    pass: {type: DataTypes.STRING},
    avatar: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING}
});


export default userModel;