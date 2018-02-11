const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;
const StatusSchema = new Schema({
    playlist: {type: Boolean, required: false},
    dinnerware: {type: Boolean, required: false},
    guestList: {type: Boolean, required: false},
    clean: {type: Boolean, required: false}, 
    grocery: {type: Boolean, required: false}, 
    seating: {type: Boolean, required: false}, 
    buyAlcohol: {type: Boolean, required: false},
    decorations: {type: Boolean, required: false},
    cook: {type: Boolean, required: false}, 
    setTable: {type: Boolean, required: false},
    ice: {type: Boolean, required: false},
    medicineCabinet: {type: Boolean, required: false},
    emptyDishwasher: {type: Boolean, required: false}, 
    clothes: {type: Boolean, required: false}, 
    lightCandles: {type: Boolean, required: false}
});

const StatusModel = mongoose.model("Status", StatusSchema);

module.exports = StatusModel;