const db = require('../database/db');

const {DataTypes} = require('sequelize')


const UserModel = db.define('users',{
    name : {type: DataTypes.STRING},
    lastName : {type: DataTypes.STRING},
    user : {type: DataTypes.STRING},
    password : {type: DataTypes.STRING},
    image : {type: DataTypes.STRING},
    email : {type: DataTypes.STRING},
    rol : {type: DataTypes.STRING}
},
{
    timestamps: false
});


module.exports = UserModel;