<img  src='../logo.png' height='70px'>

# continue 

En esta lección cubriremos:

* continue
* break

## continue

Termina la ejecución de las sentencias de la iteración actual del bucle actual o la etiqueta y continua la ejecución del bucle con la próxima iteración.

Sintaxis
continue [ etiqueta ];
label
Identificador asociado con la etiqueta de la sentencia.

Descripción
En contraste con la sentencia break, continue no termina la ejecución del bucle por completo; en cambio,

En un bucle while, salta de regreso a la condición.
En un bucle for, salta a la expresión actualizada.
La sentencia continue puede incluir una etiqueta opcional que permite al programa saltar a la siguiente iteración del bucle etiquetado en vez del bucle actual. En este caso, la sentencia continue necesita estar anidada dentro de esta sentecia etiquetada.

Ejemplos
Ejemplo: Usando continue con while
El siguiente ejemplo muestra un bucle while que tiene una sentencia continue que se ejecuta cuando el valor de i es 3. Así, n toma los valores 1, 3, 7 y 12.

i = 0;
n = 0;
while (i < 5) {
   i++;
   if (i == 3)
      continue;
   n += i;
}
Copy to Clipboard
Ejemplo: Usando continue con una etiqueta
En el siguiente ejemplo, una sentencia etiquetada checkiandj contiene una sentencia etiquetada checkj. Si se encuentra continue, el programa continua hasta encima de la sentencia checkj. Cada vez que se encuentra continue, checkj se reitera hasta que su condición devuelve false. Cuando se devuelve false, el recordatorio de la sentencia checkiandj se completa.

Si continue tuviese una etiqueta checkiandj, el programa continuaría hasta encima de la sentencia checkiandj.

checkiandj:
while (i < 4) {
  document.write(i + "<br>");
  i += 1;

  checkj:
  while (j > 4) {
    document.write(j + "<br>");
    j -= 1;
    if ((j % 2) == 0)
      continue checkj;
    document.write(j + " is odd.<br>");
  }
  document.write("i = " + i + "<br>");
  document.write("j = " + j + "<br>");
}

## break
Resumen
Termina el bucle actual, sentecia switch o label y transfiere el control del programa a la siguiente sentencia a la sentecia de terminación de éstos elementos.

Sintaxis
break [etiqueta];
etiqueta
Identificador asociado con la etiqueta de la sentencia.

Descripción
La sentencia break incluye una etiqueta opcional que permite al programa salir de una sentencia etiquetada. La sentencia break necesita estar anidada dentro de la sentencia etiquetada. La sentencia etiquetada puede ser cualquier tipo de sentencia; no tiene que ser una sentencia de bucle.

Ejemplos
Ejemplo: Usando break
La siguiente función tiene una sentencia que termina el bucle while cuando i es 3, y entonces devuelve el valor 3 * x.

function comprobarBreak(x) {
   var i = 0;
   while (i < 6) {
      if (i == 3)
         break;
      i++;
   }
   return i * x;
}