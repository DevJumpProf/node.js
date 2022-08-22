const express = require('express');
const app = express();
const db = require('./database/db.js');
const diasRoutes = require('./routes/router.js');

const port = 3000;

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', diasRoutes)
app.use(express.json());

try {
    db.authenticate();
    console.log('Conectado la base de datos');
} catch (error) {
    console.log(`No se pudo conectar ${error}`);
}




app.listen(port, () =>{
    console.log(`Servidor funcionando en http://localhost:${port}`);
});