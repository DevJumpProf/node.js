const bcrypt = require('bcrypt');

let pass = 'camila';

let passHasheada = bcrypt.hashSync(pass,12);

let passEncriptada = bcrypt.compareSync(pass,passHasheada);

/* console.log(passHasheada); */ // devuelve la clave encriptada
console.log(passEncriptada); // devuelve un booleano


