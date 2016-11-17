var mongoose = require('mongoose');

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
  user: {
    type: String,
    required: true
  },
  image: String
});

module.exports = mongoose.model('Post', PostSchema);
