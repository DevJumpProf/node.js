/* Ejercicio  arrays */

/* 1)Declarar un array que vamos a llamar “clasificaciones” con los siguientes valores:
Marcos, Franco, Agostina, Leon, Juan Cruz,Eduardo */

let clasificaciones = [
  "Marcos",
  "Franco",
  "Agostina",
  "Leon",
  "Juan Cruz",
  "Eduardo",
];

/* (vamos a suponer que esa es la orden de clasificación de un concurso) */

/* 2)recorre el array (clasificaciones) e Imprime la clasificación actual.
 (realizar una funcion "mostrarClasificacion()" esa funcion debe recorrer el array con un bucle for y mostrar la clasificacion) */
function mostrarClasificacion(clasificaciones) {
  // FORMA CON FOR
  // for(let i=0;i<clasificaciones.length;i++){
  //     console.log(`${i+1}-${clasificaciones[i]}`);
  // }

  // FORMA CON FOREACH
  clasificaciones.forEach((element, i) => {
    console.log(`${i + 1} - ${element}`);
  });
}
//1era vista de la clasificacion
// mostrarClasificacion(clasificaciones);

/* 3)El concurso continua, y se van modifican esas posiciones anteriores. Debemos cambiar en el array: */
/* a)Leon adelanta a Agostina */
function adelantarAlumnos(clasificaciones) {
  clasificaciones.splice(2, 1, "Leon");
  clasificaciones.splice(3, 1, "Agostina");
  console.log(clasificaciones);
}
adelantarAlumnos(clasificaciones);
/* b)Eduardo es descalificado y se elimina del concurso */
function descalificarAlumno(clasificaciones) {
  clasificaciones.pop();
  return clasificaciones;
}
descalificarAlumno(clasificaciones);
/* c)Detrás de Marcos y antes de Franco se clasifican dos nuevas concursantes: Julieta y Martina, en ese orden */
function nuevosConcursantes(clasificaciones) {
  // MALA FORMA DE RESOLVERLO
  // Agregar nuevos concursantes
  // clasificaciones.push("Julieta","Martina");
  // clasificaciones.splice(clasificaciones.length-1,1,"Juan Cruz");
  // clasificaciones.splice(clasificaciones.length-2,1,"Agostina");
  // clasificaciones.splice(clasificaciones.length-3,1,"Leon");
  // clasificaciones.splice(clasificaciones.length-4,1,"Franco");

  // FORMA CORRECTO DE RESOLVERLO
  // Modificar posiciones de los nuevos concursantes
  clasificaciones.splice(1, 0, "Julieta");
  clasificaciones.splice(2, 0, "Martina");
}
nuevosConcursantes(clasificaciones);

/* d)Hay una nueva participante que pasa a encabezar la clasificación: Alicia */
function nuevaCabeza(clasificaciones) {
  clasificaciones.unshift("Alicia");
  return clasificaciones;
}
console.log(nuevaCabeza(clasificaciones));
/* e)muestra la clasificación actualizada (mostrarClasificacion())y comprueba que se ha hecho correctamente  */
// Vista final de la clasificacion (ver dentro de la funcion)
mostrarClasificacion(clasificaciones);
