import db from "../data/db.js";

import { DataTypes } from "sequelize";

const HeoresModel = db.define("heroes",{
    nombre:{type:DataTypes.STRING},
    profesion:{type:DataTypes.STRING},
    pais:{type:DataTypes.STRING},
    resenia:{type:DataTypes.STRING},
})
export default HeoresModel;