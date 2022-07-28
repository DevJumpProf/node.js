<img  src='../logo.png' height='70px'>

# Lección 19: ESCRITURA DE ARCHIVOS

* .writeFileSync()
* PREPARANDO EL CONTENIDO
* INFORMACIÓN IMPORTANTE

## .writeFileSync()

Es un método que trae el paquete nativo file system que nos permite escribir archivos. Recibe dos parámetros:

● El primero, el archivo en donde queremos escribir
● El segundo, el contenido que queremos escribir

Algo importante a tener en cuenta es que, si le pasamos el nombre de un archivo que aún no existe, el mismo método se encargará de crearlo.

```javascript
const fs = require('fs');
fs.writeFileSync('estrenos-2020.txt','Titanic 2');
```
## PREPARANDO EL CONTENIDO

Los métodos de escritura de archivos que trae file system sólo pueden recibir contenido que sea de tipo string. Por eso, es importante convertir a texto todo aquello que queramos escribir en un archivo. Para convertir un objeto podemos usar el método JSON.stringify() .

```javascript
const fs = require('fs');
let pelicula = {titulo:'Titanic', minutos:560};
let peliculaJson = JSON.stringify(pelicula);
fs.writeFileSync('lista-colores.txt', peliculaJson);
```

## INFORMACIÓN IMPORTANTE

Cuando los datos que queremos escribir en un archivo nos llegan desde un formulario, capturarlos con la propiedad body del objeto request.

★ Usar el método appendFileSync() cuando queremos agregar datos en un archivo existente.

★ writeFile() se ejecuta de manera asincrónica, es decir que no bloquea la ejecución del resto del código.

★ writeFileSync() se ejecuta de manera sincrónica, es decir que bloquea la ejecución del resto del código hasta que termine con la operación.



