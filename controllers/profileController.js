const UserModel = require('../models/userModel');
const PartyModel = require('../models/partyModel');
// need to find the user then find the parties 

class ProfileController {

    static GetParty(req, res) {
        UserModel.findById({ _id: req.params.id })
        .then((user) => {
            res.json({ "user": user }).status(204);
        })
        .catch((error) => {
            res.status(500).send({ error })
        })
    }
}