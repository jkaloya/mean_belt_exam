console.log('Poll Factory');
app.factory('pollFactory', ['$http', function($http) {
    console.log("pollFactory started")
    var polls = [];
    var factory = {};

    factory.index = function(callback){
        console.log("index in factory")
        $http.get("/polls").then(function(res){
            if(callback && typeof callback == "function"){
                callback(res.data);
            }
        });
    };

    factory.create = function(newPoll, callback){
        $http.post("/polls", newPoll).then(function(res){
            if(callback && typeof callback == "function"){
                callback(res.data);
            };
        });
    };

    factory.show = function(id, callback) {
        $http.get("/poll/"+id).then(function(res){
            if(callback && typeof callback == "function"){
                callback(res.data);
            }
        });
    };

    factory.update1 = function(poll, callback) {
        $http.put("/poll/"+poll._id, poll).then(function(res){
            callback(res.data);
        });
    };

    factory.delete = function(poll, callback) {
        console.log("inside factory")
        $http.delete("/poll/"+poll._id).then(function(res){
            callback(res.data);
        })
    };
    return factory;
}]);
