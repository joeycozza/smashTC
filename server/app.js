var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(function (req, res, next) {
	var allowed = {'http://localhost:8080': 'http://localhost:8080',
		'http://localhost:63342': 'http://localhost:63342'};

	var referOrigin = req.headers.referer || req.headers.origin;

	if (referOrigin) {
		var thirdSlashIndex = referOrigin.indexOf('/', 8);
		var refererSubStr = referOrigin.substring(0, thirdSlashIndex);
		res.header('Access-Control-Allow-Origin', allowed[refererSubStr]);
	}

	res.header('Access-Control-Allow-Credentials', true);
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	res.header('Access-Control-Allow-Headers', 'content-type, Content-Length, Authorization, Origin, Accept');
	next();
});

app.use('/smashstreams', routes);
app.use('/users', users);

module.exports = app;