import express from "express"
import cors from "cors"

import heroeRoutes from "./routes/routes.js"
import db from  "./database/db.js"

const app = express()

const port = 8000

app.use(cors())
app.use(express.json())
app.use("/heroes", heroeRoutes)

try {
    await db.authenticate()
    console.log("Conexión existosa")
    
} catch (error) {
    console.log(`El error en conexión es: ${error}`)
}







app.listen (port, ()=>{
    console.log("Servidor funcionando en el puerto http://localhost:8000/")
})