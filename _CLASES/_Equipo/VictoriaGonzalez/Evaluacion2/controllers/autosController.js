const fs = require("fs");

const concesionarias = JSON.parse(fs.readFileSync("./data/concesionarias.json", "utf-8"));


module.exports = {
    autos: (req, res,next) => {
        let Autos = []
        concesionarias.forEach(element => {
            element.autos.forEach(autos => {
                Autos.push(autos)
            })
        })
        res.render('autos', {titulo: "Listado de autos", Autos: Autos})
    },

    autosmarca:(req, res, next) => {
        let marca = req.params.marca;
        let autos=[]; 
            concesionarias.forEach(element=>{
            element.autos.forEach(losAutos=>{
                if(losAutos.marca == marca){
                     autos.push(losAutos) 
                 }
            })
        })
         concesionarias.forEach(element=>{
         element.autos.forEach(losAutos=>{
             if(losAutos.marca == marca){
                 res.render('marca', {title:`marca`, marca, autos})
              }
         })
     })
     res.send("Error, la marca que ingresó no existe")


}
}