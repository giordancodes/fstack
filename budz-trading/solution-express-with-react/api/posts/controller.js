var Post = require('./model.js');

exports.index = function(req, res) {
  Post.find().then((posts) => res.send(posts));
}

exports.show = function(req, res) {
  // Post.findById
  // var post = posts.find((post) => post.id == req.params.id);
  Post.findById(req.params.id).then((post) => {
    if (post) {
      res.send(post);
      console.log(post);
    } else {
      res.status(404);
      res.send("Post not found");
    }
  });
}

exports.update = function(req, res) {
  var post = posts.find((post) => post.id == req.params.id);
  post.title = "Updated";
  res.send("OK");
}