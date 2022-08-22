const db = require('../database/db.js');
const DataTypes = require('sequelize');

const dashboardModel = db.define("users",{
    user: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    pass: {type: DataTypes.STRING}
});

module.exports = dashboardModel;