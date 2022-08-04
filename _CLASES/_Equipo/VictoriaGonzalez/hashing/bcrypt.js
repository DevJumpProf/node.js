const bcrypt = require("bcrypt")

let pass = "Vicky"  

let passencriptada = bcrypt.hashSync(pass,12)

let logpass = "Vicky"

console.log(bcrypt.compareSync(logpass, passencriptada))



