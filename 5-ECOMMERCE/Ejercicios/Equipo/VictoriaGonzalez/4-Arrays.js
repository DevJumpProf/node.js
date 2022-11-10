const frutas = ["Manzana", "Banana", "Peras"]
const numeros  = [1, 2, 3, 19, 20]



const devolverPrimerElemento=array=> {console.log (array[0])}; //devolverPrimerElemento(frutas);

const devolverUltimoElemento=array=> {console.log(array[array.length-1])};//devolverUltimoElemento(frutas);
  
const obtenerLargoDelArray=array=>{console.log(array.length)};//obtenerLargoDelArray(frutas);

const incrementarPorUno=array=>{console.log (array.map(elemento => elemento+1))}//incrementarPorUno(numeros);

const agregarItemAlFinalDelArray=(array, elemento)=>{console.log(array.push(elemento))};//agregarItemAlComienzoDelArray(frutas, "Kiwi");console.log(frutas);

const agregarItemAlComienzoDelArray=(array, elemento)=>{console.log(array.unshift(elemento))};//agregarItemAlComienzoDelArray(frutas);console.log(frutas);

const palabras = ["Hola", "Mundo"]

const dePalabrasAFrase=(palabras)=>{console.log(palabras.join(" "))};//dePalabrasAFrase(palabras);

const arrayContiene=(array, elemento)=>{console.log(array.includes(elemento))}; //arrayContiene(frutas, "Manzana")

const agregarNumeros=numeros=>{console.log (numeros.reduce((elemento1,elemento2)=> elemento1+elemento2))};//agregarNumeros(numeros)
  
const resultadosTest = [10, 15, 10]
const promedioResultadosTest=resultadosTest=>{
    let suma = 0;
    for (let i = 0; i< resultadosTest.length; i++){
        suma += resultadosTest[i];
    }console.log( suma / resultadosTest.length)
}
//promedioResultadosTest(resultadosTest);

const numeroMasGrande=numeros=>{console.log(Math.max(...numeros))};// numeroMasGrande(numeros);
  
const multiplicarArgumentos =arguments=>{
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
  multiplicarArgumentos(9,1,2,3)

const cuentoElementos = arreglo =>{
  for(let i=0; i<arreglo.length; i++)
    if(arreglo[i] > 18){
    console.log(arreglo[i])
      }
    }
// cuentoElementos(numeros);

const diaDeLaSemana = numeroDeDia => { 
    if( numeroDeDia == 1 || numeroDeDia == 7){
        console.log("Es fin de semana")
    }else if ( numeroDeDia == 2 || numeroDeDia == 3 || numeroDeDia == 4 || numeroDeDia == 5 || numeroDeDia == 6){
      console.log("Es dia laboral")
    }
}

const empiezaConNueve = (n) => {console.log(n.toString()[0] === '9')}; //empiezaConNueve(800)
  
const iguales = [1, 1, 1, 2]
  
const todosIguales = arreglo => {   
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
  
const mesesDelAño = array => {
    let newArray = array.filter(elemento => elemento == "Enero" & elemento == "Marzo" & elemento ==  "Noviembre");
    if(newArray.includes("Enero", "Marzo", "Noviembre")){
      console.log(newArray);
    }else{
      console.log("No se encontraron los meses pedidos")
    }
  }
const months = ["Enero", "Marzo"]
//mesesDelAño(months)
  
const mayorACien = array => {
    const newArray = array.filter( element => element > 100);
    console.log(newArray);
  }
const mayoresACien = [101, 0, 101]
// mayorACien(mayoresACien)
  
const breakStatement = numero => {
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

const continueStatement = numero => {
  let newArray =[];
    for(let i = 0; i<10; i++){
      numero+= 2
      if(i == 5){
        console.log("Se saltea esta suma")
        continue;
      }else{
      newArray.push(numero);
    }
    }
  console.log(newArray)
  }
// continueStatement(1)
  
