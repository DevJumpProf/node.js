import express from 'express';
import cors from 'cors';
//import db from './database/db.js'

import registerRoutes from './routes/register.js';
//import usersRoutes from './routes/users.js';

const app = express();
const port = 8000;

app.use(cors());
app.use(express.urlencoded({ extended: false })); //captura informacion de un formulario y lo vuelve objeto
app.use(express.json()); //con esto podemos capturar ese objeto y leerlo en formato json
app.use('/register', registerRoutes)

app.set('view engine', 'ejs');
//app.set('views', __dirname + '/views');

//app.use(express.static(__dirname + '/public'));

app.listen(8000, () => {
    console.log(`Servidor funcionando en puerto ${port}`);
})