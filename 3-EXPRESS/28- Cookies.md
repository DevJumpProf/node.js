<img  src='../logo.png' height='70px'>

# Lección 26: COOKIES

* COOKIES
* COOKIES EN EXPRESS
* IMPLEMENTAR COOKIES


## COOKIES

Son archivos que podemos guardar del lado del cliente, es decir, en el navegador del usuario.

## COOKIES EN EXPRESS

A diferencia de la sesión, a las cookies les podemos configurar un "tiempo de vida". Es decir que una cookie dejará de existir cuando expire ese tiempo y no cuando el usuario cierra el navegador.

Algo a tener en cuenta cuando trabajamos con cookies es que, al estar almacenando datos del lado del cliente, contamos con un límite de espacio.

Es importante destacar que no debemos almacenar ningún dato sensible en una cookie.

Para mantener logueado a un
usuario luego de cerrar el
navegador, podemos usar una
cookie para identificarlo y
loguearlo automáticamente la
próxima vez que ingrese al sitio.

## IMPLEMENTAR COOKIES

➔ Instalar el módulo cookie-parser con npm. (Con
express-generator ya viene incluído este módulo)
```javascript
npm i cookie-parser --save
```
➔ Para crear una cookie y guardar en ella información,
ejecutamos el método cookie() sobre el objeto response ,
pasándole dos argumentos:

◆ El nombre que le quiero asignar a esa cookie
◆ El valor

```javascript
res.cookie('club', 'Boquita Juniors');
```
El nombre de la cookie que definimos será una propiedad de cookies 

## IMPLEMENTAR COOKIES

Para leer información de una cookie usamos el objeto request , llamando al objeto cookies , seguido del nombre de la cookie que definimos anteriormente:

```javascript
console.log(req.cookies.club);
```