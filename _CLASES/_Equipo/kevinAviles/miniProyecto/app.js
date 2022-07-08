const express = require('express');
const app = express();
let port = 3000;
const rutaPrincipal = require('./routes/rutasWeb');

app.set('view engine','ejs');
app.set('views', __dirname+'/views');

app.use(express.static(__dirname + '/public'));

app.use('/',rutaPrincipal);

app.use((req,res,next)=>{
    res.status(404).render("404", { titulo: "Página 404",laUrl:req.url });/* req.url te devuelve la url que el usario escriba despues de la ruta raiz */
});


app.listen(port,()=>{
        console.log(`
        ***************************************
        Servidor funcionando en el puerto ${port}
        link ---->>> http://localhost:${port}
        ***************************************
        `);
       
});


/*
paso 1: npm init
paso 2: archivo app.js mas capetas como views router etc
paso 3: en la app.js requerir expres la app y el puerto 
paso 4: usar app.listen con el puerto y el CONSOLE.Log para saber si el servidor esta funcionando
paso 5: el la carpeta de routers crear el archivo rutasWeb.js y requerir express y router
paso 6: crear el motor de vistas con app.set 
paso 7: tambien le decimos a app.set donde van a estar esas vistas que es (app.set('views', __dirname+'/views');) donde en views son las vistas y el otro parametro ' __dirname+'/views' es la ubicacion de donde van a estar
paso 8: crear archivos ejs en la carpeta views
paso 9: crear las rutas con los req, y res, renderizando las paginas
paso 10: crear ruta de 404 not fund, con links para volver a las paginas principales, siempre va despues del todas las rutas
paso 11: probar si las rutas funcionan  */