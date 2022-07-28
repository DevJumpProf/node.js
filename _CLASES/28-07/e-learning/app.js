import express from "express"
import cors from "cors"

import registerRoutes from "./routes/register.js"
/* import usersRoutes from "./routes/routes.js" */

//import db from "./database/db.js"


const app = express()

const port = 8000;


// defino el motor de vistas EJS
app.set("view engine", "ejs"); //cual va a ser mi motor de vistas
/* app.set("views", __dirname + "/views"); // donde van a estar esas vistas */

app.use (cors())
app.use(express.urlencoded({ extended: false }));
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
