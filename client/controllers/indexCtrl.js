function IndexCtrl($scope, $http) {

	$http.get('http://localhost:1337/')
		.success(function(twitchResponse) {
			console.log('IT WAS A SUCCESS');
			$scope.streams = twitchResponse;
		}).error(function(error) {
			console.log(error);
		});

}