var Post = require('./model.js');

exports.index = function(req, res) {
  Post.find().populate('user comments.user').exec()
  .then((posts) => res.send(posts));
}

exports.show = function(req, res) {
  Post.findById(req.params.id).populate('comments likedBy user')
  .then((posts) => res.send(posts))
  .catch((err) => res.send(404));
}

// Before you implement these methods, make sure you're including the body-parser
// middleware in index.js

exports.update = function(req, res) {
  Post.findById(req.params.id)
  .then((post) => {

    post.title = req.body.title;
    post.description = req.body.description;
    post.image = req.body.image;
    post.location = req.body.location;
    post.user = req.body.user;

    post.save()
    .then(function(post) {
      res.send(post);
    })
    .catch(function(err) {
      res.status(422);
      res.send(err);
    });
  })
  .catch(() => res.send(404))
}

exports.create = function(req, res) {
  // using _.pick from underscore.js maintains a strict allowance for which fields can be passed thru when using Post(req.body)
  delete req.body.user;
  let p = new Post(req.body);

  p.save()
  .then((p) => res.send(p))
  .catch((err) => {
    res.status(422);
    console.log(err.errors);
    res.send(err.errors);
  });
}

exports.createComment = function(req, res) {
  Post.findById(req.params.id)
  .then((post) =>{
    post.comments.push({ user: 'hardcoded user ID', content: req.body.content });
  })
}