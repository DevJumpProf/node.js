const express = require('express');
const app = express();
const port = 3000;
const home = require('./router/rutasWeb.js');
const cursos = require('./router/cursos');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use('/', home);
app.use('/cursos', cursos);

app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
    res.status(404).render('404',{titulo: 'Error404'});
});


app.listen(port, () =>{
    console.log('Servidos listo en puerto' + port);
});