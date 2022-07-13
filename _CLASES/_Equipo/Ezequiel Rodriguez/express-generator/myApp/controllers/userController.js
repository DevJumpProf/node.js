module.exports = {
    index: (req, res, next) => {
         res.render("users", { usuarios: ["Juan","Pepe","Luis"]});
    },
    show: (req, res, next) => {
        ["Gabriel","jose","Agostina"]
    }
};

// RUTAS PARAMETRIZADAS