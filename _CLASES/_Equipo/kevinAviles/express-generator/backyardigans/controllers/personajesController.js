const fs =require('fs');
const backyardigans = JSON.parse(fs.readFileSync("./data/backyardigans.json","utf8"));
/* const heroes = JSON.parse(fs.readFileSync("./data/heroes.json", "utf8")); */



module.exports = {
    personajes:(req,res)=>{
        res.render('personajes',{
            titulo:"Personajes backyardigans",
            objeto:backyardigans
        })
    },
    id:(req,res)=>{
        backyardigans.forEach(personaje=>{
            if(personaje.id == req.params.id){
                res.render('detalle',{
                    titulo:`Detalle del personaje ${req.params.id}`,
                    elPersonaje:personaje
                })
            }
        })
        
    }
}