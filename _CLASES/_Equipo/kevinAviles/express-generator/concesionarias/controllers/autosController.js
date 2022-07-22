const fs = require('fs');
const db = fs.readFileSync('./data/concesionarias.json','utf8');
const concesionarias = JSON.parse(db);

module.exports = {
    indexAutos:async(req,res)=>{
        let losAutos=[]
        concesionarias.forEach(element=>{
            element.autos.forEach(autos=>{
                losAutos.push(autos)
            })
        })
        /* res.send(losAutos) */
        await res.render('listaAutos',{
            titulo:"Listado de autos",
            losAutos
        })
    },
    marcaAuto:async(req,res)=>{
        let laMarca = req.params.marca;
        let autos=[];
        let paramsAceptado=false;
        let nombreSucursal;
        concesionarias.forEach(element=>{
            nombreSucursal=element.sucursal;//captura el nombre de la sucursal
            element.autos.forEach(losAutos=>{// entra al los autos de cada sucursal empezando con la primera 
                if(losAutos.marca == laMarca){// pregunta si la marca de cada auto de una sucursal  
                    losAutos.nombreSucursal=nombreSucursal; // se crea una nueva propiedad al objeto macheado con el valor de = ..  la lista de sucursales en la posicion de numListaSucursales  
                     autos.push(losAutos);
                     paramsAceptado=true; 
                }
            })
        })
        autos.forEach(element=>{
            delete element.color;
        }); 
        /* lo proximo son funciones que eliminan objetos repetidos, nose como lo hace pero lo hace */
        let autosMap = autos.map(auto=>{
            return [JSON.stringify(auto),auto]
        });
        let autosMapArr = new Map (autosMap) //Pares de clave y valor
        let autosUnicos=[...autosMapArr.values()]; 
       
       
         /* res.send(elRecParamsPasado(laMarca));  */
          if(paramsAceptado){
            await res.render('autoMarca',{
                titulo:`Autos de ${laMarca}`,
                laMarca:laMarca,
                autosUnicos:autos
               });
          }else{
            res.render('404',{
                titulo:'Error 404',
                mensaje:`la marca "${laMarca}" no fue encontrada`
            });
          }
         

       
    },
    datoMarca:(req,res)=>{
        let laMarca=req.params.marca;
        let {dato}= req.params;
        let autos=[];
        let paramsAceptado=false;
        let nombreSucursal;
        concesionarias.forEach(element=>{
            nombreSucursal=element.sucursal;
            element.autos.forEach(losAutos=>{
                if(losAutos.marca == laMarca && (losAutos.color==dato || losAutos.anio==dato)){
                        losAutos.nombreSucursal=nombreSucursal;
                        autos.push(losAutos) 
                       paramsAceptado=true;
                }
               
               
            })

           
        })

        if(paramsAceptado){
            res.render('datoAuto',{
                titulo:`Marca ${laMarca}`,
                laMarca:laMarca,
                autos
            })
        }else{
            res.render('404',{
                titulo:"Error",
                mensaje:`El dato "${dato}" no existe dentro de la marca de los autos`
            })
        }
        
        /* res.render('404',{
            titulo:"Error",
            mensaje:`El dato ${dato} no existe dentro de la marca de los autos`
        }) */
        
       

    }   
}
/* volkswagen
peugeot
chevrolet
nissan
renault
audi
ford
toyota
fiat
citroen
chery
honda */