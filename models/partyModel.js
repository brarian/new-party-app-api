const mongoose = require('mongoose');
mongoose.Promise = global.Promise;


const Schema = mongoose.Schema;
const PartySchema = new Schema({
    Name: {type: String, required: true},
});

const PartyModel = mongoose.model("Party", PartySchema);

module.exports = PartyModel;