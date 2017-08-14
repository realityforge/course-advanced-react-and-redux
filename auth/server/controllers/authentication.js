const jwt = require('jwt-simple');
const config = require('../config');
const User = require('../models/user');

// Generate a json web token for specified user
function tokenForUser(user) {
  const now = new Date().getTime();
  //sub == subject
  //iat == issued at time
  return jwt.encode({ sub: user.id, iat: now }, config.secret);
}

exports.signup = function(req, resp, next) {
  const { email, password } = req.body;
  if (!email || !password) {
    //return an error if email or password not provided
    return resp.status(422).send({ error: 'You must provide an email and password' });
  } else {
    //See if a user with email exists to avoid duplicates
    User.findOne({ email }, function(err, user) {
      if (err) {
        return next(err);
      } else if (user) {
        //return an error if email exists
        return resp.status(422);
      } else {
        //else create+save user record
        const user = new User({ email, password });

        user.save(function(err) {
          if (err) {
            return next(err);

          } else {
            //return success response with user details
            return resp.json({ token: tokenForUser(user) });
          }
        });
      }
    });
  }
};

exports.signin = function(request, response, next) {
  // User has already been authorized by the time this is reached so we just return a token
  response.send({ token: tokenForUser(request.user) });
};
