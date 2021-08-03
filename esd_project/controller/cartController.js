// var Cart = require('../models/cart');
// var Async = require('async');


// async function createCart(req,res,next)
// {
//   //assume data is well formated
//    var body = req.body;
//    var cart = new Cart(body);
//    cart.save(function(err,res){

//     if(err)
//     {
//        res.json({error : "Failed to create a new cart"});
//     }
//     else
//     {
//        res.json({result : "Success", link:this.url,id:this._id});
//     }

//    })
// }

// async function updateCart(req,res,next)
// {
//     var filter = {_id: req.param.id};
//     var update = req.body;

//     var crt = await Cart.findOneandupdate(filter,update,{
//       new: true
//     })

//     res.json({result : 'updated', cart_link : this.url, cart_id : this._id});
// }

// async function deleteCart(req,res,next)
// {
//    var filter = {_id : req.param.id};
   
//    var user = await Cart.findOneAndDelete(filter);

//    res.json(user);

// }

// async function getCartByI(rew)