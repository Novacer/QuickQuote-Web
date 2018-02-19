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

var user = module.exports = mongoose.model('User', userSchema);

module.exports.getUserById = function (id, callback) {
  User.findById(id, callback);
}

module.exports.getUserByName = function (name, callback) {
  var query = {username: name};
  User.findOne(query, callback);
}

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

module.exports.addQuote = function (username, newQuotes, callback) {
  var query = {username: username};
  User.findOneAndUpdate(query, {quotes : newQuotes}, {new : true}, callback);
}


module.exports.comparePassword = function (candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, function (err, isMatch) {
    if (err) throw err;
    callback(null, isMatch);
  });
}
