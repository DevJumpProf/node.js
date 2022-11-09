const animales = ["Perro", "Gato","Yaguarete","Yacare","Surubi","Carpincho","Perro"];
               //      0      1      2           3        4         5         6
const numeros = [1,2,8,7,4,6,7,3,7];
             //  0 1 2 3 4 5 6 7,8
const arrayBidimencional = [1,2,3,4,5,6,[7,8]]
const Dev = "Arbusta"

/* Metodos de Arrays */



/* unshift() : Agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array. */

/* animales.unshift("Raton")
console.log(animales) */

/* shift() : Elimina el primer elemento del array y lo retorna. Este método modifica la longitud del array.
shift */

/* animales.shift()
console.log(animales) */

/* pop() : Elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array. */

/* animales.pop()
console.log(animales) */

/* push() : Añade uno o más elementos al final de un array y devuelve la nueva longitud del array. */
/* animales.push("Iguana","Loro")
console.log(animales) */

/* fill() : Cambia todos los elementos de un array por un valor estático, desde el índice de inicio hasta el índice final. Retorna el array modificado.
.fill */
/* console.log (numeros.fill(10,3))  */
/*  console.log(animales.fill(8,4,7)) */ 

/* findIndex() : Retorna el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1
.findIndex */
/* const nuevoArray = numeros.findIndex(element => element >3) 
console.log(nuevoArray) */

/* indexOf() : Retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente
.indexOf */
/* const nuevoArray = animales.indexOf("Perro");
console.log(nuevoArray) */

/* .reduce() : Aplica una función a un acumulador y a cada valor de una array (de izquierda a derecha) para reducirlo a un único valor.
.reduce */
/* const resultado = numeros.reduce((acumulador,actual)=> acumulador + actual)
console.log(resultado) */

/* join() : Une todos los elementos de un array en una cadena. Podemos pasarle como parámetro el carácter de separación que debe agregar entre los elementos.
.join */
/* console.log(animales.join("-")) */ 

/* includes() : Determina si un array incluye un determinado elemento y retorna un booleano según corresponda.
.includes */
/* console.log (animales.includes("Perro"));
console.log (numeros.includes(9)); */

/* concat() : Se utiliza para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.
.concat */
/* const nuevoArray = numeros.concat(animales);
console.log(nuevoArray) */

/* every() : Es similar al some(), ya que itera el array y retorna un booleano. Pero esta vez, para que dicho booleano sea true todos los elementos del array deberán pasar la condición dada.
.every */
/* const mayorACuatro = numeros.every(element => element>4)
console.log(mayorACuatro)

const menorACero = numeros.every(element => element<10)
console.log(menorACero)  */


/* some() : Itera el array y retorna un booleano si como mínimo uno de los elementos presentes en el array pasa una condición determinada. Recibe un callback que se encargara de preguntar aquello que queremos dentro del array
.some */
/* const mayorQueCuatro = numeros.some (element => element>4)
console.log (mayorQueCuatro)


const menoresQueCero = numeros.some (element => element<0)
console.log (menoresQueCero) */

/* .sort() : Ordena los elementos del array y retorna el arreglo ordenado. Los elementos se ordenarán en orden ascendente (de la A a la Z) por defecto.
.sort */
/* la codificación Unicode */

/* const descArray = numeros.sort ((a,b)=> a>b ? -1 : 1)
console.log(descArray)

const AscArray = animales.sort ((a,b) => a > b ? 1 : -1)
console.log(AscArray) */

 //A TENER EN CUENTA CON .sort() = los elementos son ordenados convirtiéndolos a strings y comparando la posición del valor Unicode de dichos strings. Por ejemplo, "Cherry" viene antes que "banana"  (porque las mayúsculas van antes que las minúsculas en la codificación Unicode) . En un ordenamiento numérico, 9 está antes que 80, pero dado que los números son convertidos a strings y ordenados según el valor Unicode, el resultado será "80" antes que "9".

/* .find() : Recorre el array y retorna "la primera coincidencia" del elemento que se busca.
.find */
/* const nuevoArray = numeros.find (element => element > 3);
console.log (nuevoArray)
 */

/* .forEach() : Permite iterar el contenido de un array. Recibe un callback que toma como parámetro el elemento actual de la iteración y el indice del mismo.
forEach */
/* animales.forEach ((elemento, i)=>{
    console.log(`el ${elemento} se encuentra en el indice ${i} `)
}
) */
/* .forEach()es un método que realiza una acción y no tiene nada que devolver. El valor devuelto siempre será indefinido . */

/* ¿Qué hace un forEach?
forEach() ejecuta la función callback una vez por cada elemento del array; a diferencia de map() o reduce() este siempre devuelve el valor undefined y no es encadenable. El típico uso es ejecutar los efectos secundarios al final de la cadena. */ 

/* .filter() : Recorre el array y retorna un nuevo array con aquellos elementos que pasen una determinada condición
.filter */
/* const nuevoArray = animales.filter (elementos => elementos === "Perro" || elementos === "Gato" )
console.log(nuevoArray) */



/* .map() : Permite recorre el array y modificar los elements presentes en él, retornando un nuevo array con la misma longitud que el original.
.map */

/* const nuevoArray = numeros.map (elements  => elements * 10 ); 
console.log(nuevoArray) */