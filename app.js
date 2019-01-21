var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')


var productsRouter = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use((req, res, next) => {
  if (req.query.delay) return setTimeout(next, parseInt(req.query.delay, 10))
  next()
})

app.use('/',productsRouter);

// app.get('/', (req, res, next) => res.redirect('/api'))

app.use(function(req, res, next) {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// app.get('/', (req, res, next) => res.redirect('/api'))

module.exports = app;
