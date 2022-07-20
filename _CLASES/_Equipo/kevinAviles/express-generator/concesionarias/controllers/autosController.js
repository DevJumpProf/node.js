const fs = require('fs');
const db = fs.readFileSync('./data/concesionarias.json','utf8');
const concesionarias = JSON.parse(db);

module.exports = {
    index:(req,res)=>{
        let losAutos=[]
        concesionarias.forEach(element=>{
            element.autos.forEach(autos=>{
                losAutos.push(autos)
            })
        })
        res.render('listaAutos',{
            titulo:"Listado de autos",
            losAutos:losAutos
        })
    },
    marcaAuto:(req,res)=>{
        /* let marca = req.params.marca;
        let listaAuto=[]
        concesionarias.forEach(element=>{
            element.autos.forEach(elAuto=>{
                if(elAuto.marca==marca){
                  
                        listaAuto.push(elAuto)
                   
                }
            })
        }) */
        //res.send(listaAuto)
        let laMarca = req.params.marca;
        let autos=[];
        let paramsAceptado=false;
        concesionarias.forEach(element=>{
            element.autos.forEach(losAutos=>{
                if(losAutos.marca == laMarca){
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
            res.render('autoMarca',{
                titulo:`Autos de ${laMarca}`,
                laMarca:laMarca,
                autos:autos,
                autosUnicos:autosUnicos
               });
          }else{
            res.render('404',{
                titulo:'Error 404',
                mensaje:`la marca ${laMarca} no fue encontrada`
            });
          }
         

       
    },
    datoMarca:(req,res)=>{
        let laMarca=req.params.marca;
        let {dato}= req.params;
        let autos=[];
        let paramsAceptado=false;
        concesionarias.forEach(element=>{
            element.autos.forEach(losAutos=>{
                if(losAutos.marca == laMarca && (losAutos.color==dato || losAutos.anio==dato)){
                        autos.push(losAutos) 
                       paramsAceptado=true;
                }
               
               
            })
           
        })

        if(paramsAceptado){
            res.render('datoAuto',{
                titulo:`Marca ${laMarca}`,
                laMarca:laMarca,
                autos:autos,
            })
        }else{
            res.render('404',{
                titulo:"Error",
                mensaje:`El dato ${dato} no existe dentro de la marca de los autos`
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