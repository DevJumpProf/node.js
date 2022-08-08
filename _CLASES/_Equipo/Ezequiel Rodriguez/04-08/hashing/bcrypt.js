const bcrypt = require("bcrypt");

let password = "Hola123"

let cryptPassword = bcrypt.hashSync(password,10);

let pass = "Hola123"

let comparePassword = bcrypt.compareSync(pass,cryptPassword);

console.log(comparePassword);