const {series,actores} = require ("./series")
const cowsay = require ("cowsay")
// destructuring

console.log(
    cowsay.say({
      text: "I'm a moooodule",
      e: "Oo",
      T: "U",
    })
  );