app.controller('dashboardController', ['$scope','pollFactory', 'userFactory', '$location', "$routeParams", function($scope, pollFactory, userFactory, $location, $routeParams) {
	console.log("dashboardController started");


	userFactory.get_user(function(data){
		$scope.current_user = data;
	})

	pollFactory.index(function(data){
        $scope.polls = data;
        console.log($scope.polls);
    });

	$scope.delete = function(poll){
        pollFactory.delete(poll, function(data){
            pollFactory.index(function(data){
                $scope.polls = data;
            })
        })
    }

}])
