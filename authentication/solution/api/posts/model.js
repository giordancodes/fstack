var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  content: String
});

var PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  location: {
    type: String,
    enum: ['Toronto', 'Missasauga', 'Oakville']
  },
  comments: {
    type: [CommentSchema],
    default: []
  },
  likedBy: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'User',
    default: [],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  image: String
});

module.exports = mongoose.model('Post', PostSchema);
