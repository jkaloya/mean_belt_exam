console.log('polls controller');

var mongoose = require('mongoose')
var Poll = mongoose.model('Poll');
var User = mongoose.model('User');

module.exports = {
    index: function(req,res){
        Poll.find({}, function(err, results){
            if (err){
                console.log(err);
                res.json(err);
            }
            else{
                res.json(results);
            }
        })
    },
    create: function(req,res){
        var poll = new Poll({question: req.body.question, option1: req.body.option1, option2: req.body.option2, option3: req.body.option3, option4: req.body.option4});
        console.log(poll);
        poll.save(function(err){
            if(err){
                console.log(err)
                res.json(err);
            }
            else{
                res.json({success: true})
            }
        })
    },
    show: function(req,res){
        Poll.findOne({_id: req.params.id}, function(err, data){
            if (err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },
    update1: function(req,res){
        Poll.findOne({_id: req.params.id}, function(err, data){
            if(err){
                res.json(err);
            }
            else{
                data.option1[0].votes += 1;
                data.save(function(err){
                    if(err){
                        res.json(err);
                    }
                    else{
                        res.json(data);
                    }
                });
            }
        });
    },
    destroy: function(req,res){
        Poll.findOne({_id: req.params.id}, function(err, data){
            if(err){
                res.json(err);
            }
            else{
                Poll.remove(data, function(err) {
                    if (err){
                        res.json(err);
                    }
                    else{
                        console.log("deleted");
                        res.json({success:true});
                    }
                })
            }
        })
    }
}
