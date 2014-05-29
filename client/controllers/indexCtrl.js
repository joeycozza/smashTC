function IndexCtrl($scope, $http) {

	$http.get('localhost:1337/smashstreams')
		.success(function(twitchResponse) {
			console.log('IT WAS A SUCCESS');
			$scope.streams = twitchResponse;
		}).error(function(error) {
			console.log(error);
		});
}

function TournyCtrl($scope, $http) {

	console.log('Made it to tourny controller');
	$http.get('localhost:1337/tournaments')
		.success(function(res) {
			console.log('IT WAS A SUCCESS');
			$scope.tournaments = res;
		}).error(function(error) {
			console.log('We got an error');
			console.log(error);
		});

}