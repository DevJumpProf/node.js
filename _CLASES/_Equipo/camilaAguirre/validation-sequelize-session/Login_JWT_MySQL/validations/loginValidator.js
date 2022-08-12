/* const {body} = require('express-validator');
const bcrypt = require('bcryptjs');
const UserModel = require('../models/UserModel');

module.exports = [
    body('email')
    .custom((value,{req}) => {
        
        return UserModel.findOne({
            where : {
                email : value
            }
        }).then(user => {
            if(!user || !bcrypt.compareSync(req.body.pass,user))
        })

    })
]
 */


