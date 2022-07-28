import express from 'express';
import cors from 'cors';
import path from 'path';

import registerRoutes from './routes/register.js';
/* import usersRoutes from './routes/users.js'; */

/* import db from './database/db.js'; */


const app = express();
const port = 8000;

// view engine setup
/* app.set('views', path.join(__dirname, 'views')); */
app.set('view engine', 'ejs');

app.use(cors());
app.use(express.urlencoded({ extended: false })); // esta funcion sirve para los formularios
app.use(express.json());
app.use('/register', registerRoutes);
/* app.use('/user', usersRoutes); */

/* try {
    await db.authenticate();
    console.log('conexion base de datos');
} catch (error) {
    console.log(`el error de la conexion es: ${error}`);
} */

app.listen(port,() => {
    console.log('servidor funcionando en http://localhost:8000/');
})