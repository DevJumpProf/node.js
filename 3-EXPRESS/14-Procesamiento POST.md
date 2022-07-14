<img  src='../logo.png' height='70px'>

# Lección 14: PROCESAMIENTO POST

* MANEJAR PETICIONES POST
* CONFIGURAR EL FORMULARIO
* CAPTURAR LA INFORMACIÓN
* req.body

## MANEJAR PETICIONES POST

Comúnmente usamos el método post para:

● Enviar información sensible al servidor
● Crear un nuevo recurso

Cuando definimos una ruta podemos hacerlo directamente sobre la ejecución de express, implementar un sistema de ruteo o también incorporar controladores que se encarguen de manejar las rutas.

Sin importar el camino que elijamos para implementar en nuestra aplicación, es en el callback de la ruta que estamos definiendo en donde escribiremos la lógica para manejar la petición que esté llegando.

En un contexto en donde quisiéramos agregar una nueva película a nuestro sistema, tendríamos que crear dos rutas: una que muestre el formulario de creación y otra que se encargue de procesar la información

```javascript
// ruta que envía un formulario a la vista → GET
router.get('/pelicula/crear', (req,res) => {res.render('crear')});
// ruta que procesa la información del formulario → POST
router.post('/pelicula/crear', (req,res) => {...});
```

Los nombres de las rutas pueden ser iguales porque cada una está implementando un método diferente.

## CONFIGURAR EL FORMULARIO

Las peticiones que se hacen por post son todas aquellas que viajan a través de un formulario. Es necesario que el mismo tenga seteados los atributos:

● method → donde escribiremos el método HTTP que usaremos para enviar la información
● action → donde escribiremos la ruta a donde viajará esa información para ser procesada

```javascript
<form method="POST" action="/pelicula/crear">
...
</form> 
```

## CAPTURAR LA INFORMACIÓN

Para poder trabajar con los datos que se envían desde el formulario, es necesario configurar el entorno de nuestra aplicación para que sea capaz de capturar esa información.
Si estamos trabajando con express-generator , esta configuración se creará por defecto durante la instalación.
De lo contrario, tendremos que agregar estas dos líneas de código en el archivo app.js :

```javascript
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
```

De esta forma le estamos aclarando a
la aplicación que todo aquello que
llegue desde un formulario, queremos
capturarlo en forma de objeto literal.
Y a su vez, tener la posibilidad de
convertir esa información en un
formato json, en caso de necesitarlo.

## req.body

En el request de la petición encontramos la propiedad body , un objeto literal que contendrá toda la información del formulario:
● El nombre de cada clave de ese objeto, será el nombre del atributo nname de cada input del formulario
● El valor será el dato que se haya ingresado en ese campo

```javascript
<form method="POST" action="/pelicula/crear">
Título: <input type="text" name="titulo" value="">
...
</form> 
```

```javascript
router.post('/pelicula/crear', (req,res) => {
console.log(req.body) // { titulo: Batman }
});
```

Para cerrar el ciclo del request y response que hace el servidor es necesario hacer un redireccionamiento -después de implementada la lógica- usando el método redirect() sobre el response:

```javascript
res.redirect('/peliculas');
```
