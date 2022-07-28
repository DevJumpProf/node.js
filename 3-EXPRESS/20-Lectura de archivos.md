<img  src='../logo.png' height='70px'>

# Lección 20: LECTURA DE ARCHIVOS

* .readFileSync()
* INFORMACIÓN IMPORTANTE

## .readFileSync()

Es un método que trae el paquete nativo file system que nos permite recuperar datos de un archivo para poder leerlos.
Como primer parámetro recibe la ruta del archivo que queremos leer:

```javascript
const fs = require('fs');
let sitcoms = fs.readFileSync('sitcoms.txt');
```

Para poder decodificar los datos que el método devuelve, es fundamental pasarle un segundo parámetro aclarando el tipo de encoding.:

```javascript
let sitcoms = fs.readFileSync('sitcoms.txt',{encoding: 'utf-8'});
```

Si estamos leyendo un archivo JSON, hay que convertir ese string en un objeto literal para poder manipular los datos usando el método JSON.parse().

```javascript
let users = fs.readFileSync('users.json',{encoding: 'utf-8'});
let usersJson = JSON.parse(users);
```

## INFORMACIÓN IMPORTANTE

★ readFile() se ejecuta de manera asincrónica, es decir que no bloquea la ejecución del resto del código.

★ readFileSync() se ejecuta de manera sincrónica, es decir que bloquea la ejecución del resto del código hasta que termine con la operación.



