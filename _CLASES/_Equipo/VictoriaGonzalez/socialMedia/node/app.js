import express from "express" 
import cors from "cors"


import postRoutes from "./routes/routes.js"
import db from "./database/db.js"

const app = express()


app.use(cors())
app.use(express.json())
app.use("/posts", postRoutes)

try {
    await db.authenticate()
    console.log("Conexión existosa")
} catch (error) {
    console.log(`El error en conexión es: ${error}`)
}

// hay que usar puerto 8000 porque sino choca con el puerto de React
app.listen (8000, ()=>{
    console.log("Servidor funcionando en el puerto http://localhost:8000/")
})
// vamos a tener puerto 8000 para node y puerto con el que trabaja la base de datos 



