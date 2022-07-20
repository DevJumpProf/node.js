/* const fs =require('fs');
const backyardigans = JSON.parse(fs.readFileSync("./data/backyardigans.json","utf8")); */
const fs = require('fs');
const db = fs.readFileSync('./data/concesionarias.json','utf8');
const concesionarias = JSON.parse(db);

module.exports = {
    index:(req,res)=>{
        let sucursales=[]
        concesionarias.forEach(element=>{
            sucursales.push(element.sucursal)
        })
        res.render('index',{
            titulo:'Concesionaria',
            sucursales:sucursales
        })
    }
}
/* res.send(concesionarias); */
        
         /* concesionarias.forEach(elemento=>{
            res.write(elemento)
            res.end()
        })  */
        /* let casa ={
            una: "goas",
            dos:"asdad"
        }
        for(const cosa in casa){
            res.write(cosa+' '+casa[cosa] +'\n')
            
            
        }
        res.end() */
        /* for (const elObjeto in concesionarias){
            res.write(concesionarias[elObjeto]+'\n');
        } */
       /*  res.end(); */
       /* let nombreSucursal = [];
        concesionarias.forEach(laSucursal=>{
            for (const elObjeto in laSucursal){
                if(elObjeto == 'sucursal'){
                    
                    nombreSucursal.push(laSucursal[elObjeto]);
                    
                }
                
            }   
        }) */
       /*  res.render('index') */
        /* res.end();  */

        /* res.send(nombreSucursal) */
        /* res.write('Bienvenido a nuestras Concesionarias!! Estos son nuestras sucursales')
        res.send(nombreSucursal);
        res.end(); */