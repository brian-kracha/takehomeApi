var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')

var indexRouter = require('./lib/index');
var usersRouter = require('./lib/db');
// var jsonHandler = require('./products.json')
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors)

app.use('/api', indexRouter);
// app.use('/api', usersRouter);
app.get('/', (req, res, next) => res.redirect('/api'))

module.exports = app;
