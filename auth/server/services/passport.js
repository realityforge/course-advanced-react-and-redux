const User = require('../models/user');
const passport = require('passport');
const passportJwt = require('passport-jwt');
const LocalStrategy = require('passport-local');
const JwtStrategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;
const config = require('../config');

// Options for JWT
const jwtOptions = {
  // Make sure the jwt token is extracted from authorization header
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  // Use our app secret
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

// Create local login strategy
const localLogin = new LocalStrategy({ usernameField: 'email' }, function(email, password, done) {
  // Lookup user by email and verify password matches
  User.findOne({ email: email }, function(err, user) {
    if (err) {
      // On error return error
      return done(err);
    } else if (!user) {
      // If no such user with email the return false
      return done(null, false);
    } else {
      // Check passwords match after appropriate hashing
      user.comparePassword(password, function(err, isMatch) {
        if (err) {
          // on error return the error
          return done(err);
        } else if (!isMatch) {
          // Bad password - return error
          return done(null, false);
        } else {
          // Passwords patch - huzzah login success
          return done(null, user);
        }
      });
    }
  });
});


passport.use(localLogin);
