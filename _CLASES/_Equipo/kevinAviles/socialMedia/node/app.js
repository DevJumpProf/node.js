import express from "express";
import cors from "cors";


import postRoutess from "./routes/routes.js";
import db from "./database/db.js";

const app = express();
const port = 8000;


app.use (cors());
app.use(express.json());
app.use('/posts',postRoutess);

try {
    await db.authenticate();
    console.log("Conexion extiosa, base de datos conectada\nFelicidades !! :D");
} catch (error) {
    console.log(`el error en conexion es: ${error}\nVales madres D:`);
}
app.listen(port, ()=>{
    console.log(`
    ***************************************
    Servidor funcionando en el puerto ${port}
    link ---->>> http://localhost:${port}
    ***************************************
    `);
})


