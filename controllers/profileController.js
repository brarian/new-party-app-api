const UserModel = require('../models/userModel');
const PartyModel = require('../models/partyModel');
// need to find the user then find the parties 

class ProfileController {
    static GetParty(req, res){
        UserModel.findById({ })
    }
}