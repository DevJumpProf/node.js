import express from 'express';
import cors from 'cors';

import heroeRoutes from './routes/routes.js';
import db from './database/db.js';

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use('/heroes', heroeRoutes);


try {
    await db.authenticate();
    console.log('conexion base de datos');
} catch (error) {
    console.log(`el error de la conexion es: ${error}`);
}

app.listen(port,() => {
    console.log('servidor funcionando en http://localhost:8000/');
})