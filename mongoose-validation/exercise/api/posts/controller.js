var Post = require('./model.js');

exports.index = function(req, res) {
  Post.find()
  .then((posts) => res.send(posts));
}

exports.show = function(req, res) {
  Post.findById(req.params.id)
  .then((posts) => res.send(posts))
  .catch((err) => res.send(404));
}

// Before you implement these methods, make sure you're including the body-parser
// middleware in index.js

exports.update = function(req, res) {
  Post.findById(req.params.id)
  .then((p) => {
    Object.assign(p, req.body);

    p.save()
    .then((p) => res.send(p))
    .catch((err) => {
      res.status(422);
      res.send(err);
    });
  })
  .catch((err) => res.send(404))
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
