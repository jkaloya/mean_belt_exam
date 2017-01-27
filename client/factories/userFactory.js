app.factory('userFactory', function($http){
	var factory = {}

	var current_user;

	factory.get_user = function(callback){
		callback(current_user);
	}

	factory.set_user = function(user, callback){
		current_user = user;
		callback(current_user);
	}

	return factory;
})
