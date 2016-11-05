var express = require ('express');
var app = express();

app.get('/', (req, res) =>{
	res.send('Welcome back.');
});

app.get('/api/:str', (req, res) =>{
	res.send(`You requested /api/${req.params.str}`);
});

app.get('*.css', (req, res) =>{
	res.sendFile(`${__dirname}/public/public.css`, (err) =>{
		res.status(404);
		res.send("The requested file has not been found.");
	});
});

app.get('*.jpg', (req, res) =>{
	res.sendFile(`${__dirname}/public/skinner.jpg`, (err) =>{
		res.status(404);
		res.send("The requested file has not been found.");
	});
});

app.get('*.js', (req, res) =>{
	res.sendFile(`${__dirname}/public/dat.js`, (err) =>{
		res.status(404);
		res.send("The requested file has not been found.");
	});
});

app.get('*.json', (req, res) =>{
	res.sendFile(`${__dirname}/public/public.json`, (err) =>{
		res.status(404);
		res.send("The requested file has not been found.");
	});
});

app.get('*', (req, res) =>{
	res.sendFile(`${__dirname}/public/smrt.jpg`, (err) =>{
		res.status(404);
		res.send("The requested file has not been found.");
	});
});

app.listen(8080);