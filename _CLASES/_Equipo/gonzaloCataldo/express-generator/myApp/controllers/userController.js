module.exports = {
    index: (req, res, next) => {
         res.render("users", { titulo: "usuarios" , usuarios: ["Juan","Pepe","Luis"]});
    },
    show: (req, res, next) => {
        ["Gabriel","pepe","Agostina"]
    }
};

// RUTAS PARAMETRIZADAS