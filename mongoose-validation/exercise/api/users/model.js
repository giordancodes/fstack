var mongoose = require('mongoose');

// var UserSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     default: {}
//   },
//   email: String,
//   posts: {
//     type: [mongoose.Schema.Types.ObjectId],
//     ref: 'Post'
//   }
// });

var UserSchema = new mongoose.Schema({
  name: String,
  email: String
});

module.exports = mongoose.model('User', UserSchema);