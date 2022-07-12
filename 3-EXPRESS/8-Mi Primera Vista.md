<img  src='../logo.png' height='70px'>

# Lección 8: Mi Primera Vista

* RENDERIZAR UNA VISTA
* .render()
* RECURSOS ESTÁTICOS
* REQUERIR UN RECURSO ESTÁTICO
* PASO A PASO

## RENDERIZAR UNA VISTA

REPASO MVC

Las vistas se comunican con los controladores y reciben la información que ellos reciben de los modelos.
Para poder renderizar una vista es importante aclararle al controlador qué vista queremos enviar al navegador.

<img  src='../img/repasomvc.jpg' height='200px'>


## .render()

Es un método que se encuentra dentro del objeto response de la petición. Nos permite enviarle una vista al navegador para que este la renderice.
Recibe un string como parámetro: el nombre del archivo de la vista que queremos renderizar.

Es importante aclarar que, cuando le pasamos el nombre del archivo, no hace falta aclararle la carpeta en donde está almacenada esa vista -siempre y cuando hayamos configurado el template engine correctamente con el método use().
Tampoco hace falta aclarar la extensión del archivo

```javascript
const controller = {
mostrarPeliculas: (req, res) => {
res.render('peliculas')
}
}
```

## RECURSOS ESTÁTICOS

Son aquellos recursos públicos que manejamos dentro de nuestra aplicación: imágenes, archivos css, videos, archivos de javascript, etc. Para poder disponer libremente de ellos en nuestro proyecto, hace falta aclararle a Express dónde vamos a estar almacenando esos recursos.

```javascript
app.use(express.static(__dirname + '/public'));
```

Con esa línea de código le estamos dando a Express acceso libre a todo lo que se encuentre dentro de la carpeta public.

El nombre de la carpeta puede ser el que queramos. Por convención
se utiliza el nombre 'public'.

## REQUERIR UN RECURSO ESTÁTICO

Para acceder a alguno de estos recursos desde nuestros archivos, sólo hace falta aclarar la ruta hacia dicho recurso, comenzando la ruta siempre con una '/'.

```javascript
<img src="/images/logo.png">
```
¿Por qué?
Porque Express ya sabe que nuestros recursos  estáticos se almacenan en la carpeta public. Por lo tanto, si bien no hace falta aclararlo en la ruta, tenemos que crear el path completo: 
public/images/logo.png    

## PASO A PASO

Instalar ejs

```javascript
npm i ejs --save
```
➔ Configurar ejs como el template
engine de la app

```javascript
app.set('view engine', 'ejs')
```
➔ Configurar el acceso a la carpeta de
recursos estáticos

```javascript
app.use(express.static(__dirname+ 'public'))
```





