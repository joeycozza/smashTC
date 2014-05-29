var mongoose = require('mongoose');


var tournamentSchema = mongoose.Schema({
	title: {type: String, required:true},
	startDate: {type: String, required:true},
	updatedAt: {type:String, required:true},
	twitchStreamName: {type: String},
	challongeUrls:[{type:String}],
	challongeIds:[{type:String}],
	twitterHashtags:[{type:String}],
	miscInfo: [{type:String}],
	highlights:[{type:String}],
	creator:{type:String, required:true},
	contributors:[{type:String}]
});

var TournamentModel = mongoose.model('Experience', tournamentSchema);

exports.getTournamentModel = function getTournamentModel() {
	return TournamentModel;
};