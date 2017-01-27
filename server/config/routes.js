console.log('routes');

var path = require('path');
var users = require('./../controllers/users.js');
var polls = require('./../controllers/polls.js');

module.exports = function(app){

    app.post('/users', function(req, res){
		console.log("third: /server/config/routes.js app.post('/users')")
		console.log(req.body);
		usersController.create(req, res);
	})

	app.get("/users", function(req, res){
		usersController.index(req, res);
	})

    app.get('/polls', function(req, res){
        console.log(req.body)
        polls.index(req, res);
    });

    app.post('/polls', function(req, res){
        console.log(req.body)
        polls.create(req, res);
    });

    app.get('/poll/:id', function(req, res){
        polls.show(req, res);
    });

    app.put('/poll/:id', function(req, res){
        console.log(req.body)
        polls.update1(req, res);
    });

    app.delete('/poll/:id', function(req, res){
        polls.destroy(req, res);
    });

}
