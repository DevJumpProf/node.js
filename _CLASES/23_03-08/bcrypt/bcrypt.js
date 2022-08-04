const bcrypt = require ("bcrypt")

let passRegister = "batman"

let passEncriptada = bcrypt.hashSync(passRegister,10)

let passLogueo = "batman"

console.log(bcrypt.compareSync(passLogueo,passEncriptada))