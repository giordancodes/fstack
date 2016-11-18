var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name: String,
  email: String
});

var PostSchema = new mongoose.Schema({
  title: {
  	type: String,
  	required: true,
  	minlength: 5,
  	maxlength: 255
  },
  description: String,
  location: {
  	type: String,
  	enum: ['Toronto', 'Alert', 'Fiji']
  },
  user: {
		type: String,
		required: true
  },
  image: String,
  comment_count: {
		type: Number,
		min: 0,
		max: 99
  },
  user_details: UserSchema
});

module.exports = mongoose.model('Post', PostSchema);
