var config = require('./config');
var jwt = require('jsonwebtoken');

module.exports = function (req,res,next){

  var tokens = req.headers['Authorization'].split();
  var token = tokens[1];
  if (!token) 
    return res.status(403).send({ auth: false, message: 'No token provided.' });

  // verifies secret and checks exp
  jwt.verify(token, config.SECRET_KEY, function(err, decoded) {      
    if (err) 
      return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });    

    // if everything is good, save to request for use in other routes
    req.id = decoded.id;
    next();
  });


}