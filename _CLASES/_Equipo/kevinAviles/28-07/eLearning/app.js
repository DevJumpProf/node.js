import express, { application } from "express";
import cors from "cors";

import db from "./database/db.js";

import registerRouter from "./routes/register.js";
import usersRouter from "./routes/users.js";

const app =express();
const port = 8000;

app.set("view engine", "ejs"); //cual va a ser mi motor de vistas
/* app.set("views", __dirname + "/views"); */

app.use (cors());
app.use(express.json());
app.use('/register',registerRouter)
/* app.use('/users',usersRouter); */

/* try {
    await db.authenticate();
    console.log("Conexion extiosa, base de datos conectada\nFelicidades !! :D");
} catch (error) {
    console.log(`el error en conexion es: ${error}\nVales madres D:`);
} */
app.listen(port, ()=>{
    console.log(`
    ***************************************
    Servidor funcionando en el puerto ${port}
    link ---->>> http://localhost:${port}
    ***************************************
    `);
})