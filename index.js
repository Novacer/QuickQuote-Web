var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var passport = require('passport');

// connect to database
mongoose.connect('mongodb://horizon:hrwest@ds041678.mlab.com:41678/quickquote-users');

// check successful connection
mongoose.connection.on('connected', function() {
  console.log("connected to database");
});

// check unsuccessful connection
mongoose.connection.on('error', function(err) {
  console.log(err);
});

// using express
var app = express();

// API route
var users = require('./routes/users');

var port = process.env.PORT || 8080;

// using CORS middleware to protect api url
app.use(cors());

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

// body parser middleware
app.use(bodyParser.json());

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// config passport
require('./config/passport')(passport);

// set API route
app.use('/users', users);

// base url
app.get('/', function(request, response) {
  response.send("Hello World");
});

app.get('/*', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

// check server start
app.listen(port, function() {
  console.log("server started on port " + port);
});
