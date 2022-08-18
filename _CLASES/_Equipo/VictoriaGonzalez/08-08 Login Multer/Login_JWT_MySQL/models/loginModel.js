const db = require("../database/db.js")
const DataTypes = require("sequelize")

const loginModel = db.define("users",{
    user:{type:DataTypes.STRING},
    name:{type:DataTypes.STRING},
    pass:{type:DataTypes.STRING},
    avatar:{type:DataTypes.STRING},
    email:{type:DataTypes.STRING},
    birthday:{type:DataTypes.DATE},
    rol:{type:DataTypes.STRING}
})

module.exports = loginModel