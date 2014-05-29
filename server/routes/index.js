var express = require('express');
var request = require('request');
var router = express.Router();

/* GET home page. */
router.get('/smashstreams', function (req, res) {

	request("https://api.twitch.tv/kraken/streams?game=Super Smash Bros. Melee", function (error, response, body) {
		if (error) {
			res.send(500, error);
		} else {
			var bodyObj = JSON.parse(body);
			console.log(bodyObj.streams);
			res.send(bodyObj.streams);
		}
	});
});


module.exports = router;
