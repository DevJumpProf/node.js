import db from "../database/db.js";

import { DataTypes } from "sequelize"

const HeroeModel = db.define("heroes",{
    nombre: {type: DataTypes.STRING},
    profesion:{type: DataTypes.STRING},
    pais: {type: DataTypes.STRING},
    resenia: {type: DataTypes.STRING}
})

export default HeroeModel;