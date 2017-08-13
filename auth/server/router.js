const Authentication = require('./controllers/authentication');

module.exports = function(app) {
  app.get('/signup', Authentication.signup);
  app.get('/', function(req, res, next) {
    res.send(['ignore-me']);
  });
};
