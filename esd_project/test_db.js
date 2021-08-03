#! /usr/bin/env node

console.log('This script populates some test books, authors, genres and bookinstances to your database. Specified database as argument - e.g.: populatedb mongodb+srv://cooluser:coolpassword@cluster0.a9azn.mongodb.net/local_library?retryWrites=true');

var async = require('async')
var Flowers = require('./models/flower')
var Cart = require('./models/cart')
var Users = require('./models/users')


var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1/ESD_G5';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


var test_flower = new Flowers({

  price : 100,
  color : 'red',
  image : 'ttt.jpg',
  availability : 10

})

test_flower.save(function(err,result){
  if (err){
      console.log(err);
  }
  else{
      console.log(result)
  }
})