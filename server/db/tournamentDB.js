var mongoose = require('mongoose');
var fakeTournaments = require('./util/fakeTournaments');


var tournamentSchema = mongoose.Schema({
	title: {type: String, required: true},
	startDate: {type: String, required: true},
	updatedAt: {type: String, required: true},
	twitchStreamName: {type: String},
	challongeUrls: [
		{
			category: {type: String},
			url: {type: String}}
	],
	challongeIds: [
		{category: {type: String},
			cId: {type: String}}
	],
	twitterHashtags: [
		{type: String}
	],
	eventInfo: [
		{type: String}
	],
	miscInfo: [
		{type: String}
	],
	highlights: [
		{type: String}
	],
	creator: {type: String, required: true},
	contributors: [
		{type: String}
	]
});

var TournamentModel = mongoose.model('Tournament', tournamentSchema);

exports.getTournamentModel = function getTournamentModel() {
	return TournamentModel;
};

exports.getTournaments = function (req, res) {
	res.send([fakeTournaments.getSKTAR()]);
};