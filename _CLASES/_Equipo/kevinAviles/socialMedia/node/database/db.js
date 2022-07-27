import  Sequelize  from "sequelize";/* importo el paquete sequelize ede sequielize */

//instancio una nueva dataBASE en los parentesis va el nombre de la base de datos creada, el segundo es el nombre de nuestro usuario , el tercero la contraseña y luego un objeto que tiene el host, el dialect que es en que database se esta creando y por ultimo el puerto, luego lo exportas
const db = new Sequelize("postdatabase","root","",{
    host : "localhost",
    dialect : "mysql",
    port : 3306
});

export default db;


/* IMPORTANTE EN EL PACKAGE.JSON TIENES QUE PONER ESTO "type": "module", despues de main app.js  */
//primero se empieza el proyecto con express y no con express generator
// se instalan las dependencias que en este caso son"cors","express","mysql2" y "sequelize"
// se crean las carptetas de : "routes", "models", "database", "controllers" y sus diferentes archivos0
//se crea la base de datos, en un caso futuro solo se vera la tabla o grafica relacional de la base de datos
//en la carpeta "database" se crea un archivo de db.js en el cual vamos a conectarnos con nuestra base de datos
/* por alguna razon que desconosco ahora utilizamos el import en ves del "module.export" y el "require"  */
/* Importamos "Sequelize" de sequelize
creamos una constante que contendra un nuevo objeto "Sequelize" con contendra:
-El nombre de la base de datos que vas a utilizar
-El nombre de tu usuario en tu programa de db
-Tu contraseña de dicho programa
y luego un objeto que contendra lo siguiente:
-el host(nombre en donde se hara el proyecto)
-el dialect(el entorno de ejecucion de la "bd" en este caso mysql) 
-el puerto */
// luego todo eso lo exportamos 

//en la carpeta modelo pondremos todas las tablas(aun no se si es una tabla por cada archivo o todo en un archivo)
//importamos la base de datos desde el archivo de que esta en la carpeta "database"
//importamos el objeto {DataTypes} desustructurado de "sequelize";
//Creamos una constante que tendra el nombre de la tabla en mayusculas seguido de la palabra model que tendra en su contenido:
/*-el nombre de tu tabla entre comillas 
y luego un obejeto que contrendra todos los atribustos de tu tabla excepto los "createdAt" y "updatedAt" que se asignaran solo y son atributos encargados de decir cuando se crea un registro y cuando se modifica
al final exportamos esa constante 
 */
//en la parte de controllers.
//cada metodo debe de ser exportado y empezar la funcion con async. El await lo tendra cada vez que llame a la base de datos
/* al final en el archivo app.js hacemos esto:
importamos express
importamos cors
importamos las rutas que vamos a utilizar 
importamos la base de datos de la carpeta database
creamos la constante app
el puerto 
usamos el metodo cors
usamos el metodo express json
hacemos un try catch
en el try hacemos un "await?" que traiga al metodo de db.authenticate() si esto se cumple hace un console.log
en el catch(error) tiras un log 
y al final un app.listen 
y ya esta! :D  */
