import User from '../models/user';

module.signup = function(req, resp, next) {
  const { email, password } = req.body;

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
          resp.json({ success: true });
        }
      });
    }
  });
};
