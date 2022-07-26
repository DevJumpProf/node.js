import express from "express";
import cors from "cors";
import heroeRoutes from "./routes/routes.js";
import db  from "./database/db.js";

const app = express();
const port = 8000;

app.use(cors())
app.use(express.json())
app.use('/heroes', heroeRoutes)

try {
    await db.authenticate()
    console.log('Conexión establecida');
} catch (error) {
    console.log('Error en la conexión');
}

app.listen(port,() =>{
    console.log('Servidor funcionando');
})