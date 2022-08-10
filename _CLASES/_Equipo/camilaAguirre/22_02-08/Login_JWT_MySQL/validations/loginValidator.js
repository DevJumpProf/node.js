const {body} = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require('../database/db');

module.exports = [
    body('pass')
    .custom((value,{req}) => {
        
        db.query('SELECT * FROM users WHERE user = ?', [req.user], async (error, results)=>{

            if(results.length == 0 || !(await bcryptjs.compare(req.pass, results[0].pass)) ){
                return true
            }else{
                return false
            }
        })

    })
]





     /*   conexion.query('SELECT * FROM users WHERE user = ?', [user], async (error, results)=>{
            const id = results[0].id
            const token = jwt.sign({id:id}, process.env.JWT_SECRETO, { 
                expiresIn: process.env.JWT_TIEMPO_EXPIRA
            })  

            console.log("TOKEN: "+token+" para el USUARIO : "+user)

               const cookiesOptions = {
                    expires: new Date(Date.now()+process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
                    httpOnly: true
               }
               res.cookie('jwt', token, cookiesOptions)
               res.render('login') */
