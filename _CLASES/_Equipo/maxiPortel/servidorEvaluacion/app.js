const express = require('express');
const app = express();
const port = 3000;


app.use('/', require('./router/rutasWeb.js'))


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
    res.status(404).render('404',{titulo: 'Error404'});
});


app.listen(port, () =>{
    console.log('Servidos listo en puerto' + port);
});