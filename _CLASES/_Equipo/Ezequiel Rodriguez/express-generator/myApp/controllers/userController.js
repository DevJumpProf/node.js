module.exports = {
    index: (req, res, next) => {
         res.render("users", {title: 'Users'});
    },
    idUser: (req, res, next) => {
        res.send("Informacion del usuario " + req.params.idUser)
    },
    idLenguajes: (req,res,next) => {
        res.send ("El usuario " + req.params.idUser + " maneja los lenguajes " + req.params.idLenguajes);
    }
};

// RUTAS PARAMETRIZADAS