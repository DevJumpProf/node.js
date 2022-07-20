const fs = require('fs');
const db = fs.readFileSync('./data/concesionarias.json','utf8');
const concesionarias = JSON.parse(db);

module.exports = {
    index:(req,res)=>{
        let losAutos=[]
        concesionarias.forEach(element=>{
            element.autos.forEach(auto=>{
                losAutos.push(auto)
            })
        })
        res.send(losAutos)
    },
    marcaAuto:(req,res)=>{
        let marca = req.params.marca;
        let listaAuto=[]
        concesionarias.forEach(element=>{
            element.autos.forEach(elAuto=>{
                if(elAuto.marca==marca){
                  /*   if(listaAuto.includes(elAuto.modelo)){ */
                        listaAuto.push(elAuto)
                   /*  } */
                }
            })
        })
        res.send(listaAuto)
    }
}