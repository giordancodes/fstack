var Post = require('./model.js');

exports.index = function(req, res, next) {
  var query = { };

  if (req.query.location) { query.location = req.query.location; }
  if (req.query.title) { query.title = { $regex: req.query.title, $options: 'i' };  }

  Post.find(query).sort({ title: 1 }).populate('user comments.user').exec()
  .then((posts) => { res.send(posts) })
  .catch(next)
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
    post.user = req.user._id;

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
  post.user = req.user._id;

  post.save()
  .then(function(post) {
    res.send(post);
  }).catch(function(err) {
    res.status(422);
    res.send(err);
  });
}

exports.delete = function(req, res, next) {
  Post.remove({_id: req.params.id})
  .then(() => res.send(200))
  .catch(next)
}
