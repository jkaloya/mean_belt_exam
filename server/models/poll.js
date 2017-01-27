console.log('Poll model');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var PollSchema = new mongoose.Schema({
    _user: {type: Schema.Types.ObjectId, ref: 'User'},
    question: {type: String, required: true, minlength: 8},
    option1: [{
                option1: {type: String, required: true, minlength: 3},
                votes: {type:Number, default:0}
            }],
    option2: [{
                option2: {type: String, required: true, minlength: 3},
                votes: {type:Number, default:0}
            }],
    option3: [{
                option3: {type: String, required: true, minlength: 3},
                votes: {type:Number, default:0}
            }],
    option4: [{
                option4: {type: String, required: true, minlength: 3},
                votes: {type:Number, default:0}
            }]
}, {timestamps: true});


module.exports = mongoose.model('Poll', PollSchema);
