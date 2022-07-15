module.exports= {
    index: (req,res) => {
        res.render("index", {titulo:"Backyardigans Arbusta", tituloprincipal: "Bienvenido a la pagina de backyardigans en Arbusta!"})
    }
}