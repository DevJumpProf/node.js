const mysql = require('mysql');

const conexion = mysql.createConnection({
    host : process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    datbase: process.env.DB_DATABASE,
});

conexion.connect((error) =>{
    if(error){
        console.log(`El error de conexion: ${error}`);
    }
    console.log('Conectado a la base de datos MySql!');
});

module.exports = conexion;