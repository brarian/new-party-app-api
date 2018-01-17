const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;
const PartySchema = new Schema({
    partyDate: {type: String, required: true},
    partyTime: {type: String, required: true},
    menu: {type: Array, required: true}, 
    subQuestionType: {type: String, required: true}, 
    subQuestions: {type: Array, required: true}, 
});

const PartyModel = mongoose.model("Party", PartySchema);

module.exports = PartyModel;