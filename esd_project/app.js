var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fs = require('fs');
var jwt = require('jsonwebtoken');


var indexRouter = require('./routes/index');
// var authRouter = require('./routes/auth');
// var cartRouter = require('./routes/cart');
var flowerRouter = require('./routes/flowers');
// var userRouter = require('./routes/user');
// var verifyJWTToken = require('./verifyJWTToken');


var app = express();


/// setting up mongodb connection

//Import the mongoose module
var mongoose = require('mongoose');
// var mongoDB = 'mongodb://127.0.0.1/ESD_G5';
var mongoDB = 'mongodb+srv://harshit:harshit1234@cluster0.wj1bc.mongodb.net/ESD_G5?retryWrites=true&w=majority'
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
/************************************************** */

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/static',express.static(path.join(__dirname, 'public')))
app.use('',indexRouter);
// app.use('/auth', authRouter);
// app.use('/users',verifyJWTToken,userRouter);
// app.use('/cart',verifyJWTToken,cartRouter);
app.use('/flowers',flowerRouter);

module.exports = app;
