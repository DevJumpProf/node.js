const fs = require('fs');
const db = fs.readFileSync('./data/concesionarias.json','utf8');
const concesionarias = JSON.parse(db);

module.exports = {
    indexMarca:(req,res)=>{
        let marcas = [];
        
        concesionarias.forEach(element=>{
            element.autos.forEach(autosSucursal=>{
                if(marcas.includes(autosSucursal.marca) == false){
                    marcas.push(autosSucursal.marca)
                }
            })
        }) 
       res.render('listaMarcas',{
        titulo:'Nuestas marcas',
        marcas:marcas
       })     
    },
    autosMarca:(req,res)=>{
        let {marca} = req.params;
        let autos=[];
        let paramsAceptado= false;
        concesionarias.forEach(element=>{
            element.autos.forEach(losAutos=>{
                if(losAutos.marca == marca){
                     autos.push(losAutos) 
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
       
       /*  concesionarias.forEach(element=>{
            element.autos.forEach(losAutos=>{
                if(losAutos.marca == marca){
                    
                }
            })
        }) */
         /* res.send(elRecParamsPasado(laMarca));  */
        if(paramsAceptado){
            res.render('marca',{
                titulo:`Marca ${marca}`,
                marca:marca,
                autos:autos,
                autosUnicos:autosUnicos
               }) 
        }else{
            res.render('404',{
                titulo:'Error 404',
                mensaje:`la marca "${marca}" no fue encontrada`
            }) 
        }
         

       
      
       
        
        
    }
}