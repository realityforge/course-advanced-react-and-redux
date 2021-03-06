const bcrypt = require('bcrypt-nodejs');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define our model
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String
});

// Hook into save and encrypt password before saving model
userSchema.pre('save', function(next) {
  const user = this;

  // generate a salt
  bcrypt.genSalt(10, function(err, salt) {
    if (err) {
      return next(err);
    } else if (err) {
      return next(err);
    } else {
      // Hash the password using the salt
      bcrypt.hash(user.password, salt, null, function(err, hash) {
        if (err) {
          return next(err);
        } else {
          // Replace password with encrypted variant
          user.password = hash;
          next();
        }
      });
    }
  });
});

// Accept a candidate password, encypt it using the smae salt and see if it matches
// the saved model password field.
userSchema.methods.comparePassword = function(candidate, callback) {
  bcrypt.compare(candidate, this.password, function(err, isMatch) {
    if (err) {
      return callback(err);
    } else {
      callback(null, isMatch);
    }
  });
};

// Create the model class
const ModelClass = mongoose.model('user', userSchema);

// Export the model
module.exports = ModelClass;
