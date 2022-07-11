const express = require('express'); // requerimos express
const router = express.Router(); // llamamos al metodo router de express

//definimos las vistas 
router.get('/', (req, res) => {
    // console.log(__dirname)
    res.render("index", {tituloPrincipal : "HOME"}) // definimos el 'mensaje' que se debe enviar con la etiqueta ejs
})

router.get('/contacto', (req,res) =>{
    res.render('contacto', {tituloPrincipal : "CONTACTO"})
})
module.exports = router;