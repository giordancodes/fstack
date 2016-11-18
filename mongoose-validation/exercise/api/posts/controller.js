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
    p.title = req.body.title;
    p.desc = req.body.description;

    p.save().then((p) => {
      res.send(p);
      // res.redirect(`/api/posts/${post._id}`);
    })
  })

  // Implement your update logic here
  // To find the post to update, use Post.findById(req.params.id)
  // Remember that this returns a promise, so you'll need to work with the
  // returned post in a .then() call. Also, remember to save()!
  // If you can't find the post, return a 404.
  res.send("Not implemented");
}

exports.create = function(req, res) {
  // Implement your create logic here. Create a new post with var post = new Post()
  // Remember to save!
  let p = new Post();

  p.save()
  // .then((p) => )
  res.send("Not implemented");
}
