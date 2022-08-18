const userModel = require('../models/userModel.js');

const user = req.body.user;
const usuarioLog = userModel.findOne({where: {user: user}})

if(usuarioLog.user == user){
    req.session.user = user
}

