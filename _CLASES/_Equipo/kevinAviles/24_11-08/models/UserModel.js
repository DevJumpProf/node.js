const db = require('../database/db');

const {DataTypes} = require('sequelize');

const UserModel = db.define('users',{
    user: {type:DataTypes.STRING},
    name: {type:DataTypes.STRING},
    pass: {type:DataTypes.STRING},
    email: {type:DataTypes.STRING},
    avatar: {type:DataTypes.STRING},
})

module.exports = UserModel;