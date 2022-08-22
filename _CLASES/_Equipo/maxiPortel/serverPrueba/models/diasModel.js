const db = require('../database/db.js');
const { DataTypes } = require('sequelize');

const diasModel = db.define("dias",{
    nombre:{type:DataTypes.STRING},
    referencia:{type:DataTypes.STRING},
    laboral:{type:DataTypes.TINYINT}
});

module.exports = diasModel;