const fs = require ("fs");
/* console.log(fs) */
const heroes = JSON.parse(fs.readFileSync("./data/heroes.json","utf8"));


module.exports = {
index:(req,res,next)=>{
res.send(heroes)
}
}