import express from 'express';
import cors from "cors";
import postRoutes from "./routes/routes.js";
import db from './database/db.js';


const app = express()
const port = 8000;

app.use(cors());
app.use(express.json());
app.use('/posts', postRoutes);

try {
    await db.authenticate()
    console.log('Conexión exitosa');
} catch (error) {
    console.log(`Error en conexión: ${error}`);
}

app.listen(port, () =>{
    console.log(`'Servidor funcionando en http://localhost:${port}`);
})

