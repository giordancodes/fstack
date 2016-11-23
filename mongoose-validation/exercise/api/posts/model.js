var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
  content: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
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
  image: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  comments: {
    type: [CommentSchema],
    default: []
  },
  likedBy: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'User',
    default: []
  },
});


module.exports = mongoose.model('Post', PostSchema);
