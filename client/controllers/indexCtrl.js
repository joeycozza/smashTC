function IndexCtrl($scope, $http) {

	$http.get('http://localhost:1337/smashstreams')
		.success(function(twitchResponse) {
			console.log('IT WAS A SUCCESS');
			$scope.streams = twitchResponse;
		}).error(function(error) {
			console.log(error);
		});
}

function TournyCtrl($scope, $http, $sce) {

	console.log('Made it to tourny controller');
	$http.get('http://localhost:1337/tournaments')
		.success(function(res) {
			$scope.tournaments = res.map(function(tourny) {
				tourny.challongeUrls = tourny.challongeUrls.map(function(challongeUrl) {
					challongeUrl.url = $sce.trustAsResourceUrl(challongeUrl.url);
					return challongeUrl;
				});
				tourny.twitchChatUrl = $sce.trustAsResourceUrl(tourny.twitchChatUrl);
				return tourny;
			});
		}).error(function(error) {
			console.log('We got an error');
			console.log(error);
		});

}