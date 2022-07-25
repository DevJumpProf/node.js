import express from "express"
import cors from "cors"

import postRoutes from "./routes/routes.js"
import db from "./database/db.js"

const app = express()

try {
    await db.authenticate()
    console.log("conexion exitosa")
} catch (error) {
    console.log(`el error en conexion es: ${error}`)
}

app.listen(8000, ()=> {
    console.log("servidor funcionando en http://localhost:8000/")
})

app.use (cors())
app.use(express.json())
app.use("/posts",postRoutes)