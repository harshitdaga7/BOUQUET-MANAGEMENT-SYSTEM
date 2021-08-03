var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var cartSchema = new Schema({

  user_id: {type: Schema.ObjectId, ref : 'Users',required : true},
  flowers_id : [{type : Schema.ObjectId, ref :'Flowers'}],
  wrapping_type : {type: String,enum:['Plastic', 'Basket'], default:'Plastic'},
  address : {type : String},
  cost : {type : Number,default: 0}
});


cartSchema
.virtual('url')
.get(function () {
  return '/cart/'+this._id;
});

module.exports = mongoose.model('Cart', cartSchema);