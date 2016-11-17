var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name: String,
  email: String
});

var PostSchema = new mongoose.Schema({
  title: String,
  description: String,
  location: String,
  user: String,
  image: String,
  comment_count: Number,
  user_details: UserSchema
});

module.exports = mongoose.model('Post', PostSchema);
