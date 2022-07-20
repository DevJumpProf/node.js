
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

/* var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users'); */
/* 4 rutas en total, 4 archivos router.js */
/* primero declare las rutas que voy a utilizar */
const indexRouter = require('./routes/index');
const sucursalesRouter = require('./routes/sucursales');
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

/*segundo les digo con que url va a ejecutar esas rutas y luego me voy a la carpeta rutas */
app.use('/',indexRouter);
app.use('/sucursales',sucursalesRouter);
app.use('/marcas',marcasRouter);
app.use('/autos',autosRouter);
/* app.use('/', indexRouter);
app.use('/users', usersRouter); */

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
