const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const config = require('../config');
mongoose.Promise = global.Promise;


const Schema = mongoose.Schema;
const UserSchema = new Schema({
    firstName: {type: String, required: true},
    lastName:{type: String, required: true },
    userName:{type: String, required: true },
    email: {type: String, required: true },
    password:{type: String, required: true },
});
UserSchema.pre('save', function(next){
    const salt = bcrypt.genSaltSync(config.SALTFACTOR);
    this.password = bcrypt.hashSync(this.password, salt);
    next();
    // bcrypt.genSalt(config.SALTFACTOR, (error, SALT) => {
    //     if (error) return next(error);
    //     bcrypt.hash(this.password, SALT, (error, HASH) => {
    //         if (error) return next(error);
    //         this.password = HASH
    //         next();
    //     })
    // })
})
UserSchema.methods.verifyPassword = function(password){
   return bcrypt.compareSync(password, this.password)
}
const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;