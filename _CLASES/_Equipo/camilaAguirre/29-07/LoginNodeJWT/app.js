const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

/* const indexRouter = require('./routes/router') */


const app = express();


// motor de plantillas
app.set('view engine', 'ejs');

//carpeta static
app.use(express.static('public'));

//para procesar datos de los formularios
app.use(express.urlencoded({extended:true})) // ver por que aca es true y no false
app.use(express.json());


//setear variables de entorno
dotenv.config({path: './env/.env'})

app.use('/', require('./routes/router'));
app.use('/login', require('./routes/router'));
app.use('/register', require('./routes/router'));

/* app.get('/', (req,res)=> {
    res.render('index')
})
 */
app.listen(3000,()=>{
    console.log('servidor levantado en el puerto http:/localhost:3000');
})


