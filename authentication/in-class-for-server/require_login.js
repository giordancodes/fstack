module.exports = function(req, res, next) {
  console.log("checking login", req.user);
  if (!req.user) {
    res.sendStatus(401);
  } else {
    next();
  }
}
