<img  src='../logo.png' height='70px'>

# Lección 16: ERROR 404

* ERROR 404
* PREPARANDO EL SISTEMA

## ERROR 404

Es un error que envía el servidor cuando no encuentra un recurso que solicitó el cliente.

## PREPARANDO EL SISTEMA

Todo sistema debe estar preparado para manejar las solicitudes erradas. Express trae consigo una respuesta automatizada para cuando el usuario solicita un contenido que ya no existe en el servidor. En el entry point de la aplicación -la mayoría de las veces app.js - podemos configurar esta respuesta implementando el método use() sobre la ejecución de express

```javascript
app.use((req, res, next) => {
 ...
})
```

use() va a recibir un callback con 3 argumentos: un request, un
reponse y el paso siguiente a ejecutar después de que se haya
ejecutado el callback.

Dentro de este método, definiremos cómo va a reaccionar el sistema cada vez que el usuario quiera acceder a una ruta que no existe. Sobre el response implementaremos el método status() seguido del método render() para poder renderizar la vista que verá el usuario cada vez que se presente este escenario:

```javascript
app.use((req, res, next) => {
 res.status(404).render('not-found');
})
```





