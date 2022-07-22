const fs = require("fs");

const concesionarias = JSON.parse(fs.readFileSync("./data/concesionarias.json", "utf-8"));

module.exports = {
    marcas: (req, res, next) => {
        let marcas = []

        concesionarias.forEach(sucursales => {
            sucursales.autos.forEach(autos => {
                if (marcas.includes(autos.marca) == false) {
                    marcas.push(autos.marca)
                }
            })
        })
        res.render('marcas', { title: "marcas", marcas: marcas })
    },
       marcas1:(req,res)=>{
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
