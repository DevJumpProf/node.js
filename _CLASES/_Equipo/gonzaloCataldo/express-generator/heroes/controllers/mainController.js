module.exports = {
    index: (req, res, next) => {
    res.render("index", {titulo: "Heroes main"})
    },
    creditos: (req, res, next) => {
    res.render("creditos", {titulo: "Heroes creditos"})
    }
}


