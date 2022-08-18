const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const router = require ("./routes/routes.js");

const app = express()
const port = 3000;

// Configuramos el motor de vista
app.set('view engine', 'ejs')

// Utilizamos el router
app.use(router)

//
app.use(expressLayouts);

app.use(express.static(path.join(__dirname, "public")))

/* app.get('/', (req, res) => {
    res.send('dashboard con Node JS');
}) */

app.listen(port, ()=> {
    console.log(`Server up running in http://localhost:${port}`)
})