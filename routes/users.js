// REST API

var express = require('express');
var router = express.Router();
var User = require('../models/user');
var passport = require('passport');
var jwt = require('jsonwebtoken');

// Register Users
router.post('/register', function(req, res, next) {
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    quotes: []
  });

  var username = req.body.username;

  User.getUserByName(username, function(err, user) {
    if (err) throw err;

    if (!user) {
      User.addUser(newUser, function(err, user) {
        if (err) {
          res.json({success: false, msg: "Failed to Register"});
        }
        else {
          res.json({success: true, msg: "Registration complete"});
        }
      });
    }
    else {
      res.json({success: false, msg: "Nice try stranger, but the user already exists. Use /check route to check if the username is available next time!"})
    }
  });
});

// Authenticate User
router.post('/authenticate', function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;

  User.getUserByName(username, function(err, user) {
    if (err) throw err;
    if (!user) {
      return res.json({success: false, msg: "User not found!"});
    }

    User.comparePassword(password, user.password, function (err, isMatch) {
      if (err) throw err;

      if (isMatch) {
        var token = jwt.sign({data: user}, 'ddDRrS2%:Gu~]TSf/~+WQ9v#kco&|_/|W1$ZTxJvvdxvY&22gigl//_m?iwBa^;g', {
          expiresIn: '1h'
        });

        res.json({success: true, token: 'Bearer ' + token, user: {
          id: user._id, name: user.name, username: user.username, email: user.email, quotes: user.quotes}});
      }

      else {
        return res.json({success: false, msg: "Wrong Password"});
      }
    });
  });
});

router.post('/check', function(req, res, next) {
  var username = req.body.username;

  User.getUserByName(username, function(err, user) {
    if (err) throw err;

    if (!user) {
      return res.json({success: true, msg: "Username available!"});
    }
    else {
      return res.json({success: false, msg: "Username already exists!"});
    }
  });
});

// Update Quotes (protected route, requires authorization in header)
router.post('/quote', passport.authenticate('jwt', {session: false}), function(req, res, next) {
  var newQuotes = req.body.quotes;
  var username = req.body.username;
  User.editQuote(username, newQuotes, function (err, doc) {
    if (err) {
      return res.json({success: false, msg: "Failed to edit quotes!"});
    }
    else {
      console.log(doc);
      res.json({success: true, user: doc});
    }
  });
});


// Get User Profile (protected route, requires authorization in header)
router.get('/profile', passport.authenticate('jwt', {session: false}), function (req, res, next) {
  res.json({user: req.user});
});

module.exports = router;
