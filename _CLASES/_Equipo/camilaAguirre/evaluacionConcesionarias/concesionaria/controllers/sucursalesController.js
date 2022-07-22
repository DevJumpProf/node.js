const fs = require('fs');
const concesionaria = JSON.parse(fs.readFileSync('./data/concesionarias.json','utf-8'));

module.exports = {
    index : (req,res)=>{
      
      res.render('sucursales', {title: 'Sucursales',concesionaria:concesionaria}) /* se envia el array de autos para trabajar con ella  en la vista */

    },

    show : (req,res) =>{
        let sucursal = req.params.sucursal; /* se guarda en una variable lo enviado por params y de declaran variables para luego usar la informacion que se indique en ellas */
        let nombreSucursal
        let telefonoSucursal
        let direccionSucursal
        let cantidad;
        let autosArray


        concesionaria.forEach(sucursal1 => { /* se recorre el  json y cuando se matchee la sucursal de ella con la que se pasa por req.params es cuando se guarda la informacion de dicha sucursal en cada variable para enviarlas a la vista */
            if(sucursal == sucursal1.sucursal){
                nombreSucursal = sucursal1.sucursal;
                telefonoSucursal = sucursal1.telefono;
                direccionSucursal = sucursal1.direccion;
                cantidad = sucursal1.autos.length;
                autosArray = sucursal1.autos


                res.render('sucursalDetalle', {
                    nombreSucursal, telefonoSucursal, direccionSucursal, cantidad, autosArray, title: `${nombreSucursal}`
                })

            }
            
        })
        res.render('error', {titulo:'No pudimos mostrar la vista', descripcion : 'Intentalo nuevamente!', title: 'ERROR'})


    }
 

}
