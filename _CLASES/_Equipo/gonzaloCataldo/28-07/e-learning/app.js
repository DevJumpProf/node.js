import express from "express"
import cors from "cors"

import registerRoutes from "./routes/routes.js"
/* import usersRoutes from "./routes/routes.js" */

/* import db from "./database/db.js" */

const app = express()

const port = 8000;

app.set('view engine', 'ejs');

app.use (cors())
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