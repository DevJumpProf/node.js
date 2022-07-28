import express  from "express";
import cors from "cors";

import registerRoutes from "./routes/register.js";
/* import userRoutes from "./routes/users.js"; */

/* import db from "./database/db.js"; */
const app = express();

const port = 8000;

app.use(express.urlencoded({ extended: false }));

/* MOTOR DE PLANTILLAS */
app.set("view engine","ejs")
/* app.set("views",__dirname + "/views")
 */

app.use(cors());
app.use(express.json())
app.use ("/register",registerRoutes)
/* app.use ("/users",usersRoutes) */




/* try {
    await db.authenticate()
    console.log("conexion a base de datos exitosa")
} catch (error) {
    console.log(`el error en conexion es: ${error}`)
}
 */

app.listen (port,()=>{
    console.log("servidor funcionando en http://localhost:8000/")
})