var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fs = require('fs');

var indexRouter = require('./routes/index');
var authRouter = require('./routes/auth');
// var usersRouter = require('./routes/users');


var app = express();


/// setting up mongodb connection

//Import the mongoose module
var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1/ESD_G5';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
/************************************************** */

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')))
app.use('',indexRouter);
app.use('/auth', authRouter);
// app.use('/users',userRouter);
// app.use('/cart',cartRouter);
// app.use('/flowers',flowersRouter);
// app.use('/users', usersRouter);

module.exports = app;
