module.exports= {
    users: (req, res, next)=>{
        res.render("users",{title: ["Juan", "Carolina", "Camila"]})
    },
    show: (requ, res, next)=>{
        ["Juan", "Agustin", "Mariano"]
    }
}