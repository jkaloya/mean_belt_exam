app.controller('newController', ['$scope','pollFactory', 'userFactory', '$location', function($scope, pollFactory, userFactory, $location) {
    console.log("newController started");

    userFactory.get_user(function(data){
		$scope.current_user = data;
	})

    pollFactory.index(function(data){
        $scope.polls = data;
        console.log($scope.polls);
    });

    $scope.create = function(){
        pollFactory.create($scope.newPoll, function(data){
            console.log(data);
            if (data.errors){
                $scope.errors = data.errors
            }
            else{
                $location.url("/dashboard")
            }
        });
    };

}]);
