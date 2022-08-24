const db = require("../database/db.js")
const DataTypes = require("sequelize")

const UserModel = db.define("users",{
    id:{type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true},
    user:{type:DataTypes.STRING},
    name:{type:DataTypes.STRING},
    pass:{type:DataTypes.STRING},
    avatar:{type:DataTypes.STRING},
    email:{type:DataTypes.STRING},
});


module.exports = UserModel