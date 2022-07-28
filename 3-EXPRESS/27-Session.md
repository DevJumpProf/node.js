<img  src='../logo.png' height='70px'>

# Lección 27: SESSION

* SESSION
* EXPLICACIÓN TEÓRICA
* SESSION EN EXPRESS
* IMPLEMENTAR SESSION
* IMPLEMENTAR SESSION

## SESSION
Es una variable que está accesible en todo el sitio. Nos permite guardar y compartir información de un mismo usuario entre las vistas.

## EXPLICACIÓN TEÓRICA

Por defecto, las solicitudes Express son secuenciales y ninguna solicitud puede vincularse entre sí. No hay forma de saber si esta solicitud proviene de un cliente que ya realizó una solicitud anteriormente.
Los usuarios no pueden identificarse a menos que utilicen algún tipo de mecanismo que lo haga posible. Para eso usamos session .
Cuando la implementamos, a cada usuario se le asignará una sesión única pudiendo de esta manera almacenar el estado de ese usuario.

## SESSION EN EXPRESS

Cuando trabajamos con session almacenamos, del lado del servidor, datos del usuario que sean relevante para permitirle navegar con fluidez por nuestro sitio, desde información personal que sirva para el logueo o alguna característica más global, como el idioma, moneda, o color de fondo.

A su vez, del lado del cliente, se generará un identificador único que asociará a ese usuario con toda esa información.
Algo importante a tener en cuenta de session es que, cuando el usuario cierra el navegador, toda esa información se borra. Es decir que los datos de una session sólo viven mientras esté abierto el navegador.

La información del usuario la
guardaremos del lado del servidor.

El identificador único que asocia
la información con ese usuario la
guardaremos del lado del cliente,
en el navegador.

## IMPLEMENTAR SESSION

➔ Instalar el módulo express-session con npm:

```javascript
npm i express-session --save
```
➔ Requerirlo en el entry point de la aplicación:

```javascript
const session = require('express-session');
```

➔ Configurarlo como middleware a nivel aplicación.
Ejecutamos session() pasándole como argumento un objeto literal con la propiedad secret con un texto único aleatorio, que servirá para identificar nuestro sitio web.
```javascript
app.use(session( {secret: "Nuestro mensaje secreto"}));
```

## IMPLEMENTAR SESSION

➔ Al momento de querer definir y almacenar información, llamar a la propiedad session del objeto request:

```javascript
req.session.colorFondo = 'Violeta';
```

➔ Para leer información de session,

```javascript
let colorFondo = req.session.colorFondo;
```
Toda lo información que almacenemos en la variable session estará disponible para usar en todas las vistas del sitio.




