const fs = require ("fs");
/* console.log(fs) */
const heroes = JSON.parse (fs.readFileSync("./data/heroes.json", "utf8"));

module.exports ={
    index: (req,res) =>{
        res.render ('heroes', {heroes:heroes})
    },



    show: (req, res, next) => {
        let {id} = req.params;

        heroes.forEach(heroes => {
            if(id == heroes.id){
                res.send(`Soy ${heroes.nombre} mi profesion es ${heroes.profesion} y soy de pais:${heroes.pais}`)
            }
        })
        res.send('No encontramos al heroe solicitado')
    }
     
    
    
}

