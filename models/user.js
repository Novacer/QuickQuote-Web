var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// User Schema
var userSchema = mongoose.Schema({
  name: {type: String},
  email: {type: String},
  username: {type: String, required: true},
  password: {type: String, required: true},
  quotes: {type: Array, default: []}
});

// export User as User
var User = module.exports = mongoose.model('User', userSchema);

// getUserById(String, func) returns a User query by finding the object ID
module.exports.getUserById = function (id, callback) {
  User.findById(id, callback);
}

// getUserByName(String, func) returns a User query by finding the Username
module.exports.getUserByName = function (name, callback) {
  var query = {username: name};
  User.findOne(query, callback);
}

// addUser(User, func) adds a new user to the database with an encrypted password using bcrypt
module.exports.addUser = function (newUser, callback) {
  bcrypt.genSalt(10, function(err, salt){
    bcrypt.hash(newUser.password, salt, function(err, hash) {
      if (err) {
        throw err;
      }
      else {
        newUser.password = hash;
        newUser.save(callback);
      }
    });
  });
}

// editQuote(String, Array, func) edits the list of quotes of an existing user
module.exports.editQuote = function (username, newQuotes, callback) {
  var query = {username: username};
  User.findOneAndUpdate(query, {quotes : newQuotes}, {new : true}, callback);
}


// comparePassword(String, String, func) compares the candidatePassword to the
//   hashed password, and calls the callback with a true parameter if there is a
//   match, false otherwise
module.exports.comparePassword = function (candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, function (err, isMatch) {
    if (err) throw err;
    callback(null, isMatch);
  });
}
