var Flower = require('../models/flower');
var Async = require('async');


async function post_createFlower(req,res,next)
{
    var body = req.body;
    var flower = new Flower(body);


    flower.save(function(err,result)
    { 
      if(err)
      {
         res.json({success : false,message : err});
      }
      else
      {
         res.json(result);
      }

    })
}


async function get_createFlower(req,res,next)
{
   res.send('Flower creation forrm');
}



async function get_flowerById(req,res,next)
{
   var flower = await Flower.findById(req.params.id).exec();
   console.log(req.params.id)

   if(flower)
   {  
        res.json(flower);
   }
   else
   {
      res.json({success : false, message : req.params.id + 'is not valid'});
   }
}


async function get_Flower(req,res,next)
{
  var srt = 'price';
  var lim = 10;
  var asc = 1;
  var clr = null;


  if(req.query.sort) srt = req.query.sort;
  if(req.query.limit) lim = req.query.limit;
  if(req.query.order) asc = req.query.order;
  if(req.query.color) clr = req.query.color
  
  var filter = {}

  if(clr) filter = {color : clr};

  var result = await Flower.find(filter).limit(lim).sort([[srt,asc]]).exec();

  if(result)
  {
     console.log(result);
     var arr_result = []

     for(let i = 0;i<result.length;i++)
     {
        arr_result.push(result[i].url);
     }

     res.json({ success : true, data : arr_result});
  }
  else
  {
      res.json({success: false,message : 'No flowers found'});
  }
  
}


async function updateById(req,res,next)
{
  var id = req.params.id;
  var body = req.body;
  var flower = await Flower.findByIdAndUpdate(id,body,{ new: true}).exec();

  if(flower)
  {
     res.json(flower);
  }
  else
  {
     res.json({success : false, message : 'could not find flower'})
  }
}

async function deleteById(req,res,next)
{
   var id = req.params.id;

   var flower = await Flower.findByIdAndDelete(id).exec();

   if(flower)
   {
      res.send({success : true});
   }
   else
   {
      res.send({success : false , message : 'Could not find flower'})
   }
}

exports.GET_ALL_FLOWERS = get_Flower;
exports.GET_FLOWER_BY_ID = get_flowerById;
exports.POST_CREATE_FLOWER = post_createFlower;
exports.GET_CREATE_FLOWER = get_createFlower;
exports.UPDATE_FLOWER_BY_ID = updateById;
exports.DELETE_FLOWER_BY_ID = deleteById;

