/* Ejercicio  arrays */

/* 1)Declarar un array que vamos a llamar “clasificaciones” con los siguientes valores:
Marcos, Franco, Agostina, Leon, Juan Cruz,Eduardo */

let clasificaciones=["Marcos", "Franco", "Agostina", "Leon", "Juan Cruz", "Eduardo"]

/* (vamos a suponer que esa es la orden de clasificación de un concurso) */

/* 2)recorre el array (clasificaciones) e Imprime la clasificación actual.
 (realizar una funcion "mostrarClasificacion()" esa funcion debe recorrer el array con un bucle for y mostrar la clasificacion) */

 function mostrarClasificacion(array1){
    /* for (let i = 0; i < array1.length; i++) {
        console.log(array1[i]); 
        
    } */
    array1.forEach((element,i) => {
        console.log(`el ${element} se encuentra en el ${i + 1}° lugar`);
    });
}

 mostrarClasificacion(clasificaciones);

//modo Correcto ForEach (pueod usar tambien document.write)

/* 3)El concurso continua, y se van modifican esas posiciones anteriores. Debemos cambiar en el array: */
/* a)Leon adelanta a Agostina */

clasificaciones.splice(2, 1, 'Leon');
clasificaciones.splice(3, 1, 'Agostina');
console.log(clasificaciones)

/* b)Eduardo es descalificado y se elimina del concurso */

clasificaciones.pop()
console.log (clasificaciones)

/* c)Detrás de Marcos y antes de Franco se clasifican dos nuevas concursantes: Julieta y Martina, en ese orden */

clasificaciones.splice(1,0, "Julieta")
clasificaciones.splice(2,0, "Martina")
console.log(clasificaciones)

/* d)Hay una nueva participante que pasa a encabezar la clasificación: Alicia */

clasificaciones.unshift("Alicia")
console.log(clasificaciones)

/* e)muestra la clasificación actualizada (mostrarClasificacion())y comprueba que se ha hecho correctamente  */

mostrarClasificacion(clasificaciones);
