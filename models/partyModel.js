const mongoose = require('mongoose');
mongoose.Promise = global.Promise;


const Schema = mongoose.Schema;
const PartySchema = new Schema({
    partyName: {type: String, required: true},
    partyDate: {type: String, required: true},
    partyTime: {type: String, required: true}
});

const PartyModel = mongoose.model("Party", PartySchema);

module.exports = PartyModel;