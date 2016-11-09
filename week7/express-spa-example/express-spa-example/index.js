var express = require('express');
var app = express();

// Serve your API assets here. You'll need to include the post route file.
app.use('/api/posts', require('./api/posts'));

// Serve your static assets here. You'll need to use express.static middleware.
app.use(express.static("public"));
app.get('*', (req, res) =>{
	res.sendFile(`${__dirname}/public/index.html`);
});


// If none of the above matches, serve public/index.html.


app.listen(8080);
