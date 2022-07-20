const fs = require('fs');
const db = fs.readFileSync('./data/concesionarias.json','utf8');
const concesionarias = JSON.parse(db);

module.exports = {
    index:(req,res)=>{
        let marcas = [];
        
        concesionarias.forEach(element=>{
            element.autos.forEach(losAutos=>{
                if(marcas.includes(losAutos.marca) == false){
                    marcas.push(losAutos.marca)
                }
            })
        }) 
       res.render('listaMarcas',{
        titulo:'Nuestas marcas',
        marcas:marcas
       })     
    },
    autosMarca:(req,res)=>{
        let laMarca = req.params.marca;
        let autos=[];
        concesionarias.forEach(element=>{
            element.autos.forEach(losAutos=>{
                if(losAutos.marca == laMarca){
                     autos.push(losAutos) 
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
       
        concesionarias.forEach(element=>{
            element.autos.forEach(losAutos=>{
                if(losAutos.marca == laMarca){
                    res.render('marca',{
                        titulo:`Marca ${laMarca}`,
                        laMarca:laMarca,
                        autos:autos,
                        autosUnicos:autosUnicos
                       }) 
                }
            })
        })
         /* res.send(elRecParamsPasado(laMarca));  */
          
       res.render('404',{
        titulo:'Error 404',
        mensaje:`la marca ${laMarca} no fue encontrada`
    }) 
      
       
        
        
    }
}