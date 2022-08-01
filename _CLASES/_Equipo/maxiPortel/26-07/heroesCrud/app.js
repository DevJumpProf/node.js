/* import express from "express";
import cors from "cors";
import heroeRoutes from "./routes/routes.js";
import db from "./database/db.js";

const app = express();
const port = 8000;

app.use(cors())
app.use(express.json())
app.use('/heroes', heroeRoutes)

try {
    await db.authenticate()
    console.log('Conexión establecida');
} catch (error) {
    console.log(`Error en conexión: ${error}`);
}

app.listen(port,() =>{
    console.log(`Servidor funcionando en: http://localhost:${port}`);
}) */

import express from 'express';
import cors from 'cors'

import routesHeroes from './routes/routes.js'
import db from './database/db.js'

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use('/heroes', routesHeroes);

try {
    await db.authenticate();
    console.log('Conexión establecida con puerto: '+port);
} catch (error) {
    console.log(`Error en la conexón: ${error}`);
};

app.listen(port, () => {
    console.log(`Servidor a la escucha en: http://localhost:${port}`);
})