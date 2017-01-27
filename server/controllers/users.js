console.log('Users controller');

var mongoose = require('mongoose')
var User = mongoose.model('User');

module.exports = {
    index: function(req, res){
		console.log('find function users controller /server/controllers/users.js');
		User.find({}, function(err, users){
			if(err){
				console.log(err);
				res.json({error: true, errors: err})
			} else {
				res.json(users);
			}
		})
	},
	create: function(req, res){

		console.log('fourth: create function users controller /server/controllers/users.js');
		User.create(req.body, function(err, user){
			console.log("sending json back to user factory check browser console")
			if(err){
				// console.log(err);
				res.json({error: true, errors: err});
			} else {
				res.json(user);
			}
		})
	},
	show: function(req, res){
		console.log(req.body.id)
	}
}
