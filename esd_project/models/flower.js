var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var flowersSchema = new Schema({
    price: { type:Number,required: true},
    color : {type:String, required: true},
    image : {type:String},
    availability : {type :Number, default:0}
});

// Virtual for this bookinstance object's URL.
flowersSchema
.virtual('url')
.get(function () {
  return '/flowers'+this._id;
});

// Export model.
module.exports = mongoose.model('Flowers', flowersSchema);