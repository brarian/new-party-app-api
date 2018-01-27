const PartyModel = require('../models/partyModel');

class PartyController {

	static CreateParty(req, res) {
		const PartyDetails = req.body;

		const newParty = new PartyModel(PartyDetails)
		
		newParty.save() 
		.then((party) =>{
			res.status(201).send({ party })
		})
		.catch((error) => {
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
			res.status(204).send({ message: "deleted"})
		})
		.catch((error) => {
			res.status(500).send({ error })
		})
	}
}

module.exports = PartyController;