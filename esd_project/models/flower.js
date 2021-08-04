var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var flowersSchema = new Schema({
    title : {type : String, required : true},
    price: { type:Number,required: true},
    color : {type:String, required: true},
    image : {type:String},
    availability : {type :Number, default:0}
});

// Virtual for this bookinstance object's URL.
flowersSchema
.virtual('url')
.get(function () {
  return '/flowers/'+this._id;
});

flowersSchema
.virtual('image_url')
.get(function(){

  return '/static/images/' + this._id + ".jpg";
})

// Export model.
module.exports = mongoose.model('Flowers', flowersSchema);