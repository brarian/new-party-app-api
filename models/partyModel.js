const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;
const PartySchema = new Schema({
    partyDate: {type: Date, required: true},
    partyTime: {type: Date, required: true},
    menu: {type: Array, required: true}, 
    subQuestionType: {type: String, required: true}, 
    subQuestions: {type: Array, required: true}
});

const PartyModel = mongoose.model("Party", PartySchema);

module.exports = PartyModel;