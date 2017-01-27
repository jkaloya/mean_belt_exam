app.controller('loginController', ['$scope', '$location', 'userFactory', function($scope, $location, userFactory){
	$scope.error = {};
	$scope.create_new_user = function(){
		if($scope.new_user.length > 1){
			$scope.error = {};
			userFactory.set_user($scope.new_user, function(data){
				$scope.current_user = data;
				$location.url('/dashboard');
			})
		}else{
			$scope.error = {message: 'Name is required!'};
		}
	}
}])
