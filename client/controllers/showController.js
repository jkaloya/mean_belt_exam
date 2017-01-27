app.controller('showController', ['$scope','pollFactory', "$routeParams", "$location", function($scope, pollFactory, $routeParams, $location) {
    console.log("showController started");

    pollFactory.show($routeParams.id, function(data){
        $scope.poll = data;
        console.log($scope.poll)
        });

    $scope.update1 = function(){
        pollFactory.update1($scope.poll, function(data){
            console.log(data);
        });
    };
}]);
