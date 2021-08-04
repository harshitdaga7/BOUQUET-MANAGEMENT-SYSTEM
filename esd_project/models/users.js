var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var usersSchema = new Schema({

    firstName: {type: String, required : true},
    lastName: {type : String, required : true},
    email : {type : String, required : true},
    password : {type : String, required :  true},
    history : [{type : Schema.ObjectId , ref : 'Cart'}]
});

// Virtual for this bookinstance object's URL.
usersSchema
.virtual('url')
.get(function () {
  return '/users/'+this._id;
});

usersSchema
.virtual('to_json')
.get(function(){


  var temp = {

    name : this.firstName + " " + this.lastName,
    email : this.email,
  }

  return temp;

});

usersSchema
.virtual('name')
.get(function(){

    return this.firstName + ' ' + this.lastName;
});
// Export model.
module.exports = mongoose.model('Users', usersSchema);