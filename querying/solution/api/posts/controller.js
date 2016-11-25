var Post = require('./model.js');

exports.index = function(req, res, next) {
  var query = {};
  if (req.query.q) {
    query.title = { $regex: req.query.q };
  }
  Post.find(query).populate('user comments.user').exec()
  .then((posts) => res.send(posts))
  .catch(next);
}

exports.show = function(req, res) {
  Post.findById(req.params.id)
  .then((posts) => res.send(posts))
  .catch((err) => res.send(404));
}

exports.update = function(req, res) {
  Post.findById(req.params.id)
  .then((post) => {

    post.title = req.body.title;
    post.description = req.body.description;
    post.image = req.body.image;
    post.location = req.body.location;
    post.user = '5834b08bb7395187b292be38';

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
  var post = new Post();

  post.title = req.body.title;
  post.description = req.body.description;
  post.image = req.body.image;
  post.location = req.body.location;
  post.user = '5834b08bb7395187b292be38';

  post.save()
  .then(function(post) {
    res.send(post);
  }).catch(function(err) {
    res.status(422);
    res.send(err);
  });
}
