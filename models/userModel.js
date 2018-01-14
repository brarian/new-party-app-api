const mongoose = require('mongoose');
mongoose.Promise = global.Promise;


const Schema = mongoose.Schema;
const UserSchema = new Schema({
    firstName: {type: String, required: true},
    lastName:{type: String, required: true },
    userName:{type: String, required: true },
    email: {type: String, required: true },
    password:{type: String, required: true }
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;