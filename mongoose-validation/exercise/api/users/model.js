var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: {}
  },
  email: String,
  posts: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Post'
  }
});

module.exports = mongoose.model('User', UserSchema);