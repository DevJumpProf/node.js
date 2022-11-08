const frutas = ["Manzana", "Banana", "Peras"]
const numeros  = [1, 2, 3, 19, 20]



function devolverPrimerElemento(array) {
    // Devuelve el primer elemento de un array
    // Tu código:
    console.log (array[0])
  }
//  devolverPrimerElemento(frutas);



  function devolverUltimoElemento(array) {
    // Devuelve el último elemento de un array
    // Tu código:
    console.log(array[array.length-1])
  }
//  devolverUltimoElemento(frutas);
  
  function obtenerLargoDelArray(array) {
    // Devuelve el largo de un array
    // Tu código:
    console.log(array.length)
  }
//  obtenerLargoDelArray(frutas);
  
  function incrementarPorUno(array) {
    // "array" debe ser una matriz de enteros (int/integers)
    // Aumenta cada entero por 1
    // y devuelve el array
    // Tu código:
    console.log (array.map(elemento => elemento+1))
  }
//  incrementarPorUno(numeros);
  
  
  function agregarItemAlFinalDelArray(array, elemento) {
    // Añade el "elemento" al final del array
    // y devuelve el array
    // Tu código:
    console.log(array.push("Kiwi"))
  }
//  agregarItemAlFinalDelArray(frutas);
//  console.log(frutas);

  
  function agregarItemAlComienzoDelArray(array, elemento) {
    // Añade el "elemento" al comienzo del array
    // y devuelve el array
    // Pista: usa el método `.unshift`
    // Tu código:
    console.log(array.unshift("Frutilla"))
  }
 // agregarItemAlComienzoDelArray(frutas);
  // console.log(frutas);
  
  
  const palabras = ["Hola", "Mundo"]

  function dePalabrasAFrase(palabras) {
    // "palabras" es un array de strings/cadenas
    // Devuelve un string donde todas las palabras estén concatenadas
    // con espacios entre cada palabra
    // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
    // Tu código:
    console.log(palabras.join(" "))
  }
  // dePalabrasAFrase(palabras);

  
  function arrayContiene(array, elemento) {
    // Comprueba si el elemento existe dentro de "array"
    // Devuelve "true" si está, o "false" si no está
    // Tu código:
    console.log(array.includes(elemento))
  }
  // arrayContiene(frutas, "Manzana")
  
  function agregarNumeros(numeros) {
    // "numeros" debe ser un arreglo de enteros (int/integers)
    // Suma todos los enteros y devuelve el valor
    // Tu código:
    console.log (numeros.reduce((elemento1,elemento2)=> elemento1+elemento2))
  }
  // agregarNumeros(numeros)
  

  const resultadosTest = [10, 15, 10]
  function promedioResultadosTest(resultadosTest) {
    // "resultadosTest" debe ser una matriz de enteros (int/integers)
    // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
    // Tu código:
    let suma = 0;
    for (let i = 0; i< resultadosTest.length; i++){
        suma += resultadosTest[i];
    }console.log( suma / resultadosTest.length)
}
// promedioResultadosTest(resultadosTest);

  
  
  function numeroMasGrande(numeros) {
    // "numeros" debe ser una matriz de enteros (int/integers)
    // Devuelve el número más grande
    // Tu código:
    console.log(Math.max(...numeros))
  }
  // numeroMasGrande(numeros);
  
  
  function multiplicarArgumentos(arguments) {
    // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
    // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
    // Escribe tu código aquí:
    resultado = 1;
    if(arguments.length > 1){
        for(let i=0; i<arguments.length; i++){
            (resultado *= (arguments[i]))
        }console.log(resultado)
    }else if(arguments.length = 1){
        console.log(arguments)
    }else{
        console.log(0)
    }
  }
  // multiplicarArgumentos(numeros)
  
  function cuentoElementos(arreglo){
    //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
    //Escribe tu código aquí
    for(let i=0; i<arreglo.length; i++)
        if(arreglo[i] > 18){
            console.log(arreglo[i])
        }
    }
// cuentoElementos(numeros);


  
  function diaDeLaSemana(numeroDeDia) {
    //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
    //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
    //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
    //Escribe tu código aquí   
    if( numeroDeDia == 1 || numeroDeDia == 7){
        console.log("Es fin de semana")
    }else if ( numeroDeDia == 2 || numeroDeDia == 3 || numeroDeDia == 4 || numeroDeDia == 5 || numeroDeDia == 6){
      console.log("Es dia laboral")
    }
}
// diaDeLaSemana(2)
  
  
  function empiezaConNueve(n) {
    //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
    //inicia con 9 y false en otro caso.
    //Escribe tu código aquí
   //  console.log(n.toString()[0] === '9');
  }
  // empiezaConNueve(800)


  const iguales = [1, 1, 1, 2]
  
  function todosIguales(arreglo) {
    //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
    //retornar true, caso contrario retornar false.
    //Escribe tu código aquí  
   
    let numero = arreglo[0];
    for (let i = 1; i < arreglo.length; i++) {
      if(numero != arreglo[i]){
        console.log(false)
      }else{
        console.log(true)
      }
    } 
  }
  // todosIguales(iguales);
  
  function mesesDelAño(array) {
    //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
    // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
    //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
    // Tu código:

    let newArray = array.filter(elemento => elemento == "Enero" & elemento == "Marzo" & elemento ==  "Noviembre");
    if(newArray.includes("Enero", "Marzo", "Noviembre")){
      console.log(newArray);
    }else{
      console.log("No se encontraron los meses pedidos")
    }
  }
const months = ["Enero", "Marzo"]
// mesesDelAño(months)
  
  function mayorACien(array) {
    //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
    //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
    // Tu código:
    const newArray = array.filter( element => element > 100);
    console.log(newArray);
  }
const mayoresACien = [101, 0, 101]
// mayorACien(mayoresACien)
  
  function breakStatement(numero) {
    //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
    //Guardar cada nuevo valor en un array. 
    //Devolver el array
    //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
    //devolver: "Se interrumpió la ejecución"
    //Pista: usá el statement 'break'
    // Tu código:
    newArray=[]
    for(let i = 0; i<10;i++){
      if(numero == i){
        console.log("Se interrumpió la ejecución")
        break;
        
      }else{
      numero = numero+2;
      newArray.push(numero);
      console.log(newArray)
    }
  }
  }
 // breakStatement(-2);


  // No me salió 
  
  function continueStatement(numero) {
    //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
    //Guardar cada nuevo valor en un array.    
    //Devolver el array
    //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
    //Pista: usá el statement 'continue'
    // Tu código:

    let newArray =[];
    for(let i = 0; i<10; i++){
      if(i == 5){
        console.log("Se saltea esta suma")
        continue;
      }else{
      numero = numero+2;
      newArray.push(numero);
      console.log(newArray);
      }
    }
  }
continueStatement(1)
  
