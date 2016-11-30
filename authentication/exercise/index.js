var express = require('express');
var app = express();

var webpack = require('webpack');
var webpackMiddleware = require('webpack-dev-middleware');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/trading');

var bodyParser = require('body-parser');
app.use(bodyParser.json());

var passport = require('passport');
var User = require('./api/users/model');
passport.use(User.createStrategy());

app.post('./api/login', passport.authenticate('local'), function(req, res){
	res.send(req.user);
});

var session = requite('express-session');
app.use(session({ secret: 'completely secret password', resave: false, saveUninitialized: true }));
app.use(passport.session())
app.use(passport.initialize())
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Sign up a new user
app.post('/api/signup', function(req, res, next) {
  var user = new User();
  user.email = req.body.email;
  user.name = req.body.name;
  User.register(user, req.body.password, (err) => {
    if (err) { next(err); }
    req.login(user, function(err) {
      if (err) { next(err); }
      res.send(user);
    })
  })
});

// Serve bundle.js
app.use(webpackMiddleware(webpack(require('./webpack.config.js'))));

// Serve your API assets here. You'll need to include the post route file.
app.use(express.static('public'));

// Serve your static assets here. You'll need to use express.static middleware.
app.use('/api/posts', require('./api/posts'));
require('./api/users/model');

// If none of the above matches, serve public/index.html.
app.get('*', (req, res) => res.sendFile(__dirname + '/public/index.html'))

app.listen(8080);
