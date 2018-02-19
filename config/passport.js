var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var User = require('../models/user');

// configure the passport strategy
module.exports = function(passport) {
  let opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = "ddDRrS2%:Gu~]TSf/~+WQ9v#kco&|_/|W1$ZTxJvvdxvY&22gigl//_m?iwBa^;g"
  passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    // console.log(jwt_payload);
    User.getUserById(jwt_payload.data._id, function(err, user) {
      if (err) {
        return done(err, false);
      }

      if (user) {
        return done(null, user);
      }

      else {
        return done(null, false);
      }
    });
  }));
}
