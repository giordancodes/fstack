var express = require('express');
var app = express();
var passport = require('passport');

var requireLogin = require('./require_login');

var webpack = require('webpack');
var webpackMiddleware = require('webpack-dev-middleware');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/trading');

var bodyParser = require('body-parser');
app.use(bodyParser.json());

// Set up user strategies for login
var User = require('./api/users/model');
passport.use(User.createStrategy());

// Set up cookie-based sessions in express
var session = require('express-session');
app.use(session({ secret: 'mysecret', resave: false, saveUninitialized: true }));

// Initialize passport and it's session
app.use(passport.initialize());
app.use(passport.session());

// Set up serialization and deserialization of users
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Log a user into the system
app.post('/api/login', passport.authenticate('local'), function(req, res) {
  res.send(req.user)
});

// Sign up a new user in the system
app.post('/api/signup', function(req, res, next) {
  var user = new User();
  user.email = req.body.email;
  user.name = req.body.name;
  User.register(user, req.body.password, function(err) {
    if (err) { next(err); }
    req.login(user, function(err) {
      if (err) { next(err); }
      res.send(user);
    })
  })
});

// Get details on a current user.
app.get('/api/me', function(req, res) {
  res.send(req.user);
});


// Serve bundle.js
app.use(webpackMiddleware(webpack(require('./webpack.config.js'))));

// Serve your API assets here. You'll need to include the post route file.
app.use(express.static('public'));

// Serve your static assets here. You'll need to use express.static middleware.
app.use('/api/posts', requireLogin, require('./api/posts'));

// If none of the above matches, serve public/index.html.
app.get('*', (req, res) => res.sendFile(__dirname + '/public/index.html'))

app.listen(8080);
