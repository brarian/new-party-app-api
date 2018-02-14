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
		const name = Object.keys(req.body.statusUpdate)[0]
		const key = 'statusUpdate.'+name
		return PartyModel.findByIdAndUpdate(req.params.id, {
			$set: req.body.statusUpdate? { [key]: req.body.statusUpdate[name]}: req.body
		}, {new: true})
		.then((updatedParty) => {
			return res.status(201).send(updatedParty);
		})
	}

	static GetPartiesByUserId(req, res) {
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

	static GetPartyById(req, res) {
		PartyModel.findById(req.params.id)
		.then((party) => {
			if(party){
				return res.json(party).status(200);
			}
			return res.status(404).json({
				message: "party not found"
			})
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
			res.status(403).send({ message: "deleted"})
		})
		.catch((error) => {
			res.status(500).send({ error })
		})
	}
}

module.exports = PartyController;