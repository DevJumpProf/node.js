module.exports = {
    index: (req, res) => {
        res.render('nosotros', {titulo: 'Nosotros'})
    }
}

//exportamos el metodo req, res creando un metodo 'index' con este renderizamos el archivo ejs 'nosotros' y le declaramos un titulo para usar en el ejs