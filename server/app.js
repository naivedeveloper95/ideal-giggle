'use strict';
const config = require('./config');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
let isProd = config.env === 'production' || config.env === 'development';

app.use(cors({ origin: '*' }));

if (isProd) {
	app.use(function(req, res, next) {
		if (!req.secure && req.get('X-Forwarded-Proto') !== 'https') {
			res.redirect('https://' + req.get('Host') + req.url);
		} else next();
	});
}

app.use(express.static(require('path').join(__dirname, 'uploads')));

app.set('port', process.env.PORT || config.port);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Methods',
		'GET, PUT, POST, DELETE, OPTIONS',
	);
	res.header(
		'Access-Control-Allow-Headers',
		'Content-Type, Authorization, Content-Length, X-Requested-With',
	);
	if ('OPTIONS' === req.method) {
		res.send(200);
	} else {
		next();
	}
});

app.use('/api', require('./routes'));

app.use(errorHandler);

function errorHandler(err, req, res, next) {
	if (!isProd) console.log(err);
	res.status(err.status || 500);
	res.json({
		success: false,
		message: err.message,
		error: isProd ? err.name : err.stack,
	});
}
const port = app.get('port');
app.listen(port, () => {
	console.log(`Listening on port ${port}...`);
});

module.exports = app;
