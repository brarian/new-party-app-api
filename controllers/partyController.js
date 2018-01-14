const PartyModel = require('../models/partyModel');

class PartyController {

	static CreateParty() {
		const PartyDetails = req.body;
		const newParty = new PartyModel(PartyDetails);
		newParty.save() 
		.then((party) =>{
			res.status(201).send({ party})
		})
		.catch((error) => {
			res.status(500).send({ error })
		})
	}
	
	// static EditPartyById(req, res) {
		//need help with the put endpoint
	// 	PartyModel.findByIdAndUpdate({
	// 		_id: req.params.id
	// 	})
	// 	.then((party) => {
	// 		res.json
	// 	})
	// }

	static GetPartyById(req, res) {
		PartyModel.findById({ 
			_id: req.params.id 
		})
		.then((party) => {
			res.json({ "party": party }).status(204);
		})
		.catch((error) => {
			res.status(500).send({ error })
		})
	}

	static DeleteParty(req, res) {
		PartyModel.findByIdAndRemove({
			_id: req.params.id 
		})
		.then((party) => {
			res.json({ message: "deleted"}).send({ error })
		})
	}
}

module.exports = PartyController;