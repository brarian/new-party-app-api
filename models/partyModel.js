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
        invites: false,
        menu: false,
        help: false,
        
        
        rsvp: false,
        inventory: false,
        grocery: false, 
        seating: false,
        alcohol: false,

        shop: false,
        clean: false, 
        playlist: false,

        setTable: false,
        ice: false,
        flowers: false, 
        cookBefore: false, 

        drinks: false, 
        candles: false, 
        dressed: false
    }}
});

const PartyModel = mongoose.model("Party", PartySchema);

module.exports = PartyModel;