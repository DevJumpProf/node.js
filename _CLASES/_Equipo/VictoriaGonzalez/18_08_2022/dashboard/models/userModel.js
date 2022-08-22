//Require our database
const db = require("../database/db.js")
//Require Sequelize
const DataTypes = require("sequelize")
//Declare userModel to use the rows from our DB
//Define our table name                            
const userModel = db.define("users",{
//  First column name from our table, then declare what kind of data we're using
    user:{type:DataTypes.STRING},
    name:{type:DataTypes.STRING},
    password:{type:DataTypes.STRING},
    mail:{type:DataTypes.STRING},
    avatar:{type:DataTypes.STRING},
})
// Export userModel
module.exports = userModel

