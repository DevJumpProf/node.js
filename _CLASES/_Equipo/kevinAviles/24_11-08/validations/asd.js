const UserModel = require('../models/UserModel');

const user = UserModel.findOne({
    where:{
        user:req.body.user
    }
})
if(user){
    req.session.user = user.user
}
