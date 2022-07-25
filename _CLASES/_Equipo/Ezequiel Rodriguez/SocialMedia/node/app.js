import express from "express";
import cors from "cors";

import postRouter from "./routes/routes.js";
import db from "./database/db.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/posts", postRouter);

try {
    await db.authenticate()
    console.log("Conexion exitosa");
} catch (error) {
    console.log(`El error en conexion es: ${error}`);
}

app.listen(8000, () => {
    console.log("Servidor funcionando en http://localhost:8000/");
});