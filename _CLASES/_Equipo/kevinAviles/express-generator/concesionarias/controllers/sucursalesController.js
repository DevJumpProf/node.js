const fs = require('fs');
const db = fs.readFileSync('./data/concesionarias.json','utf8');
const concesionarias = JSON.parse(db);

module.exports = {
    index:(req,res)=>{

        /*   let infoSucursal = [];
        let sucursalCompleta =[] ;
        
        concesionarias.forEach(laSucursal=>{
            
                sucursalCompleta.push(laSucursal.sucursal,laSucursal.direccion,laSucursal.telefono);
                
                
      }) */
      res.render('listaSucursales',{
        titulo:'Listado de sucursales',
        concesionarias:concesionarias
      })
      
        /* console.log(infoSucursal);
        res.send(infoSucursal); */
    /*     res.render('index',{
            sucursal:sucursalCompleta
        });
         */
    } ,
    mostrarSucursal:(req,res)=>{
        
        let {sucursal} = req.params;
        let nombreSucursal;
        let direccionSucursal;
        let telefonoSucursal;
        let losAutos;
        let cantAutos=0;
        concesionarias.forEach(element => {
            if(element.sucursal == sucursal){
                nombreSucursal=element.sucursal;
                direccionSucursal=element.direccion;
                telefonoSucursal=element.telefono;
                losAutos=element.autos;
                cantAutos=element.autos.length;
        
                
            }
            res.render('sucursal',{
                titulo:`Sucursal ${nombreSucursal}`,
                nombreSucursal:nombreSucursal,
                direccionSucursal:direccionSucursal,
                telefonoSucursal:telefonoSucursal,
                losAutos:losAutos,
                cantAutos:cantAutos
            })
            
        });
        res.render('404',{
            titulo:'404 NOT FOUND',
            mensaje:`La sucursal ${sucursal} no esta en nuestra base de datos`
        })
        /* res.send(losAutos) */
        
/*         console.log(sucursalCompleta); */
        /* res.send(sucursalCompleta) */
      
    } 
}