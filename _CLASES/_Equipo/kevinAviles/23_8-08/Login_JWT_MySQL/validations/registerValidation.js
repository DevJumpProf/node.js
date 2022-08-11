const {check,validationResult,body} = require('express-validator');
const conexion = require('../database/db');

module.exports =[
    check('name').notEmpty().withMessage('El "Nombre completo" es obligatorio'),
    check('name').isLength({min:2}).withMessage('El "Nombre completo" tiene que tener un minimo de 2 caracteres'),
    check('user').notEmpty().withMessage('El "Nombre de usuario" es obligatorio'),
    check('user').isLength({min:2}).withMessage('El "Nombre de usuario" tiene que tener un minimo de 2 caracteres'),
    //check('avatar').isMimeType().withMessage('El avatar es requerido'),
    //check('email').isEmpty().withMessage('El "Mail" es obligatorio'), no va porque perjudica al otro
    check('email').isEmail().withMessage('El email tiene que ser un email verificado'),
    check('pass').isLength({min:8,max:16}).withMessage('El campo password tiene que tener un minimo de 8 caracteres y un maximo de 16'),
    body('user').custom((value)=>{ 
    return new Promise ((resolve,reject)=>{
        conexion.query('SELECT user from users where user = ?',[value],async(error,results)=>{
             if(error){
                reject(error)
             }
             if(results.length>0){
                reject(new Error('Error el usuario ya esta registrado'))
             }
             resolve()
        })    
    })
    /* try {
        conexion.query('SELECT user from users where user = ?',[value],(error,results)=>{
       if(results.length>0){
        new Error('Error el usuario ya esta registrado')
       }
        })   
    } catch (error) {
       // error('Error el usuario ya esta registrado')
    } */
     
       
    })/* .withMessage('Error el usuario ya esta registrado') */,//
 

]