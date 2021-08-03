var User = require('../models/users');
var async = require('async');
var bcrypt = require("bcrypt");


/* have to add JWT token */

async function createUser(req,res,next)
{
    const salt = await bcrypt.genSalt(10);
    const user_password = await bcrypt.hash(req.body.password, salt);
    const user_firstName = req.body.firstName;
    const user_lastName = req.body.lastName;
    const user_email = req.body.email; 

    let already_exists = await User.exists({email:user_email})

    if(already_exists)
    {
      console.log('Already Exists');
      res.status(400).json({error : 'User already exists'});
    }
    else
    {
       console.log('Lets create User');

       var user = new User({

        firstName:user_firstName,
        lastName:user_lastName,
        email : user_email,
        password : user_password
       });

       
       user.save(function(err,reslt){
        if (err){
            console.log(err)
            res.status(400).json({error : "Could not add user"});
        }
        else{
            console.log(reslt)
            res.json({result : 'OK', email : user.email, name : user.name});
        }
      })

    }
};

async function loginUser(req,res,next)
{

    var user = await User.findOne({email : req.body.email});

    if(user)
    {
      const validPassword = await bcrypt.compare(req.body.password, user.password);

      if(validPassword)
      {
         res.json({result:'Ok', email : user.email, name : user.name});
      }
      else
      {
        res.status(400).json({error : 'Invalid Credentials'});
      }
    }
    else
    {
       res.status(400).json({error :'User does not exist'});
    }
};


exports.GET_LOGIN_USER = function(req,res,next){

    res.send("Login page");

}
exports.GET_REGISTER_USER = function(req,res,next)
{
   res.send("Register Page");
}
exports.POST_LOGIN_USER = loginUser;
exports.POST_CREATE_USER = createUser;
