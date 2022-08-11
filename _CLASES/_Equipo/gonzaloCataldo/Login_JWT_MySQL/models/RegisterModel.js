const db = require("../database/db.js")
const DataTypes = require("sequelize")

const RegisterModel = db.define("users",{
    user:{type:DataTypes.STRING},
    name:{type:DataTypes.STRING},
    pass:{type:DataTypes.STRING},
    avatar:{type:DataTypes.STRING},
    email:{type:DataTypes.STRING},
},{
    timestamps: false
});

module.exports = RegisterModel