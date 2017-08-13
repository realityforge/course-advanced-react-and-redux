const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app) {
  app.post('/signin', requireSignin, Authentication.signin);
  app.get('/signup', Authentication.signup);
  app.get('/', requireAuth, function(req, res, next) {
    res.send(['ignore-me']);
  });
};
