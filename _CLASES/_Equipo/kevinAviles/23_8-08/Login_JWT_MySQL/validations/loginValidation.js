const {check,validationResult,body} = require('express-validator');
const conexion = require('../database/db');
const bcryptjs = require('bcryptjs')
module.exports = [
    check('user').notEmpty().withMessage('El nombre de usuario es requerido'),
    body('user').custom((value)=>{ 
        return new Promise ((resolve,reject)=>{
            conexion.query('SELECT user from users where user = ?',[value],async(error,results)=>{
                 if(error){
                    reject(error)
                 }
                 if(results.length>0){
                    reject(new Error('Error Usuario no registrado'))
                 }
                 resolve()
            })    
        })
    }),
    check('pass').notEmpty().withMessage('La contraseña es requerida'),
   /*  body('pass').custom((value,{req})=>{ 
        
        return new Promise ((resolve,reject)=>{
            conexion.query('SELECT * from users where user = ?',[req.params.user],async(error,results)=>{
                console.log(results[0]);
                 if(error){
                    reject(error)
                 }
                 if(results.length>0 || !(await bcryptjs.compare(value, results[0].pass)) ){
                    reject(new Error('Error Contraseña incorrecta'))
                 }
                 resolve()
            })    
        })
    }), */   
]