console.log('Users model');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    _question: {type: Schema.Types.ObjectId, ref: 'Poll'}
}, {timestamps: true});

module.exports = mongoose.model('User', UserSchema);
