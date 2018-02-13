const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;
const PartySchema = new Schema({
    date: {type: String, required: true},
    time: {type: String, required: true},
    menu: {type: Object, required: true}, 
    subQuestionType: {type: String, required: false}, 
    subQuestions: {type: Array, required: false}, 
    userId: {type: String, required: true},
    name: {type: String, required: true}, 
    bigGuestList: {type: Array, required: true},
    statusUpdate: { type: Object, default: {
        playlist: false,
        inventory: false,
        rsvp: false,
        clean: false, 
        grocery: false, 
        seating: false, 
        alcohol: false,
        shop: false,
        setTable: false,
        ice: false,
        flowers: false
    }}
});

const PartyModel = mongoose.model("Party", PartySchema);

module.exports = PartyModel;