<img  src='../logo.png' height='70px'>

# Lección 21: HASHING

* HASHING
* QUÉ ES UN HASH
* bycrypt
* .hashSync()
* .compareSync()
* INFORMACIÓN IMPORTANTE

## HASHING
Cuando trabajamos con datos sensibles es fundamental almacenarlos encriptados, para preservar la información en caso de que un tercero acceda a ella.

## QUÉ ES UN HASH

En informática, las funciones de hasheo nos permiten encriptar datos. Es decir, transformar un texto plano en una nueva serie de caracteres -con una longitud fija- imposible de descifrar para el ojo humano.

Es por eso que estas funciones vienen acompañadas de dos
características principales:
➔ la opción de encriptar un dato
➔ la opción de comparar un dato entrante con un dato hasheado para verificar si coinciden o no

## bycrypt

El paquete bycrypt nos permite incorporar estas funciones en nuestro proyecto de Node.
Para usarlo hay que instalarlo a través de npm.

```javascript
npm install bcrypt --save
```

## .hashSync()

Es un método que trae el paquete bcrypt que nos va a permitir encriptar datos. Recibe dos parámetros:

● El dato que queremos encriptar
● La sal que le queremos añadir a la encriptación
¿Qué es la sal?

Un pequeño dato añadido que hace que los hash sean significativamente más difíciles de crackear. En este contexto se le suele pasar 10 o 12.

```javascript
const bcrypt = require('bcrypt');
let passEncriptada = bcrypt.hashSync('arbi123', 10);
```

## .compareSync()

Es un método que trae el paquete bcrypt que nos va a permitir
comparar un texto plano contra un hash para saber si
coinciden o no. Este método retorna un booleano y recibe dos
parámetros:
● El primero, el texto plano
● El segundo, el hash con el que lo queremos comparar

```javascript
let check = bcrypt.compareSync('arbi123', passEncriptada);
console.log(check); // true
```

## INFORMACIÓN IMPORTANTE

★ hash() y compare() se ejecutan de manera asincrónica, es decir que no bloquea la ejecución del resto del código.

★ hashSync() y compareSync() se ejecutan de manera sincrónica, es decir que bloquea la ejecución del resto del código hasta que termine con la operación








