const dashboardModel = require('../models/dasboardModel.js');

viewPrincipal = (req, res) => {
    res.render('home');
};

viewTables = (req, res) => {
    res.render('tables');
};

viewNotifications = (req, res) => {
    res.render('notifications');
};

viewLogin = (req, res) => {
    res.render('login');
};

viewRegister = (req, res) => {
    res.render('register');
};

module.exports = {viewLogin, viewNotifications, viewPrincipal, viewRegister, viewTables};