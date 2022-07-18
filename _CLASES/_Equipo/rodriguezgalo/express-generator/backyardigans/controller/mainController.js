module.exports = {
    index: (req, res, next) => {
        res.render("index",{title: "Bienvenido a los backyardigans"})
    }
}