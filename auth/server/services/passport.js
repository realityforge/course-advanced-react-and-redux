const User = require('../models/user');
const passport = require('passport');
const passportJwt = require('passport-jwt');
const JwtStrategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;
const config = require('../config');

// Options for JWT
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
};

const jwtLogin = new JwtStrategy(jwtOptions, function(jwtToken, done) {
  // Lookup the subject of the JWT token and pass user to done.
  // Alternatively pass false if no such user (i.e. they have been
  // deleted from database since token was created)
  User.findById(jwtToken.sub, function(err, user) {
    if (err) {
      // Return an error if problem looking up user
      return done(err, false);
    } else if (user) {
      // user exists in database so return them
      done(null, user);
    } else {
      // User no longer exists in database
      done(null, false);
    }
  });
});

passport.use(jwtLogin);
