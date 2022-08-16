const {check,body, Result} = require('express-validator');
const UserModel = require('../models/UserModel');
const bcrypt = require('bcrypt');

module.exports=[
    check('user').notEmpty().withMessage("El nombre de usuario no puede estar vacio"),
    check('pass').notEmpty().withMessage("La contraseña no puede estar vacia"),
    body('user').custom(value=>{
        return UserModel.findOne({
            where:{
                user:value
            }
        }).then((result)=>{
            if(!result){
                return Promise.reject("El usuario no se encuentra en la base de datos")
            }
        })
    }),
    body('pass').custom((value,{req})=>{
        return UserModel.findOne(
            {
                where:{
                    user:req.body.user
                }
            }
        ).then(result=>{
            if(result){
                if(!bcrypt.compareSync(value,result.pass)){
                    return Promise.reject('Contraseña incorrecta')
                }
            }
            
        })
    })
]