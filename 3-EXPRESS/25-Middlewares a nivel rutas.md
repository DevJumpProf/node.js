<img  src='../logo.png' height='70px'>

# Lección 25: MIDDLEWARES A NIVEL RUTAS

* MIDDLEWARES A NIVEL RUTAS
* CÓMO CONFIGURARLO

## MIDDLEWARES A NIVEL RUTAS

Son aquellos middlewares que se aplicarán únicamente a la rutas en donde los definamos.

## CÓMO CONFIGURARLO

Ya sea que estemos utilizando un sistema de ruteo, o  rutas definidas directamente sobre la ejecución de express, para aplicarles un middleware, deberemos pasarle un callback a la ruta justo entre el request y el response.

```javascript
router.get('/usuario/:id, callback, usersController.list)
```
¿Qué es ese callback?

Es nuestro middleware. Aquella funcionalidad que queremos implementar antes de que se ejecute el response de la petición.

Cada middleware que definamos deberá recibir el request, el response y el next.
Para mantener un orden estructural en nuestra aplicación, se sugiere crear el middleware en un archivo aparte y requerirlo en donde se vaya a usar. De esta forma, nos evitamos definir los middlewares como funciones anónimas.

```javascript
function logged(req,res,next) {
// funcionalidad
next();
}
```


