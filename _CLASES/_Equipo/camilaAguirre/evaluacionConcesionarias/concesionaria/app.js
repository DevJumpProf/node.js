var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

/* creamos las variables en donde requerimos los modulos propios creados que indican la ruta y los metodos a accionarse en ellas */
const mainRouter = require('./routes/main');
const sucursalesRouter = require('./routes/sucursal');
const marcasRouter = require('./routes/marcas');
const autosRouter = require('./routes/autos');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* definimos la ruta base a tener y que complemente con las rutas propias */
app.use('/', mainRouter);
app.use('/sucursales', sucursalesRouter);
app.use('/marcas', marcasRouter);
app.use('/autos', autosRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
