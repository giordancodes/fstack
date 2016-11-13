var posts = [
  {
    id: 1,
    title: 'My Awesome Item',
    description: 'This item is amazing! You really want to get this.',
    looking_for: 'Gift cards',
    posted_by: 'Ryan'
  },
  {
    id: 2,
    title: 'Not so great item',
    description: 'Eh, I never use this. Its not so great',
    looking_for: 'Beer, wine',
    posted_by: 'Jim'
  }
]

exports.index = function(req, res) {
  res.send(posts);
}

exports.show = function(req, res) {
  var post = posts.find((post) => post.id == req.params.id);
  if (post) {
    res.send(post);
  } else {
    res.status(404);
    res.send("Post not found");
  }
}
