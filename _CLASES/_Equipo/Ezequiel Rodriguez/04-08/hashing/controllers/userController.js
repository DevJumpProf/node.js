const bcrypt = require("bcrypt")

module.exports = {
    addUser:(req, res, next)=>{
       let newUser = {
        id: ultimoId(user),
        nameUser: req.body.user,
        password:bcrypt.hashSync(req.body.pass, 10)
       }
    }
}