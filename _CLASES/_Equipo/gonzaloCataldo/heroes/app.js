import express, { application } from "express"
import cors from "cors"
import heroesRoutes from "./routes/routes.js"
import db from "./database/db.js"

const app = express()

const port = 8000;

app.use(cors())
app.use(express.json())
app.use("/heroes",heroesRoutes)


try {
    await db.authenticate()
    console.log("conexion exitosa")
} catch (error) {
    console.log(`el error en conexion es: ${error}`)
}

app.listen(port, ()=> {
    console.log("servidor funcionando en http://localhost:8000/")
})