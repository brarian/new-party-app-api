const PartyModel = require('../models/partyModel');

class PartyController {

	static CreateParty(req, res) {
		const PartyDetails = req.body;

		const newParty = new PartyModel(PartyDetails)
		console.log('party stuff====>', PartyDetails);
		newParty.save() 
		.then((party) =>{
			res.status(201).send({ party })
		})
		.catch((error) => {
			console.log('errorr=====>>>', error.message);
			res.status(500).send({ error })
		})
	}
	
	static EditPartyById(req, res) {
		PartyModel.findByIdAndUpdate(req.params.id, {
			$set: req.body
		}, {new: true})
		.then((updatedParty) => {
			res.status(204).json({
				updatedParty
			});
		})
	}
//find all parties with the username attached 
	static GetPartyById(req, res) {
		PartyModel.find({ 
			userId: req.params.id 
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
			res.status(204).send({ message: "deleted"})
		})
		.catch((error) => {
			res.status(500).send({ error })
		})
	}
}

module.exports = PartyController;