<img  src='../logo.png' height='70px'>

# Lección 24: MIDDLEWARES A NIVEL APLICACIÓN 

* MIDDLEWARES A NIVEL APLICACIÓN  
* CÓMO CONFIGURARLO
* QUÉ ES NEXT


## MIDDLEWARES A NIVEL APLICACIÓN

Son aquellos middlewares que queremos que se ejecuten siempre a lo largo de toda la aplicación, sin importar a qué ruta ingrese el usuario.

## CÓMO CONFIGURARLO

Invocando el método app.use() estamos configurando un middleware que se va a implementar en toda la aplicación.
Este método recibe un callback con tres parámetros:

● el objeto request
● el objeto response
● la función next

```javascript
app.use(function(req, res, next) {
...
})
```

Algunos de los middlewares a nivel aplicación que ya venimos utilizando son:

```javascript
// configuración de carpeta de archivos estáticos
app.use(express.static(__dirname + '/public'));
// configuración de ruteo
const rutasProductos = require('./routes/products');
app.use('/', rutasProductos);
```

## QUÉ ES NEXT

next es un callback que se va a encargar de apilar todos los middlewares que apliquen a una misma petición, y ejecutarlos uno tras otro. Cuando llegue al último y, si se ejecutaron correctamente, pasará al siguiente paso que es llegar al controlador que maneja esa ruta.
Por eso siempre al terminar cada middleware, ejecutamos next.

```javascript
app.use(function(req, res, next) {
...
next();
})
```

Configuremos un middleware que
maneje los errores 404 de la
aplicación.

```javascript
app.use((req,res, next) => {
res.status(404).render('404-page');
next();
});
```
En el entry point de la aplicación,
llamo al método use() para
configurar un middleware que
aplique a todas las peticiones del
sitio.

Le paso el callback con los tres
parámetros necesarios: el
request, el response y el next.

Si la página no existe, devolverá
un error de status 404 y,
adicionalmente, renderizará la
vista que tenga diseñada para ese
escenario.

La función next se encargará de
ejecutar el próximo paso.
Si la página existe, llamará al
controlador y este devolverá la
vista solicitada
