const express = require('express');
const router = express.Router();

const PartyController = require('../controllers/partyController');


router.route('/:id')
    .get(PartyController.GetPartyById)
    .put(PartyController.EditPartyById)
    .delete(PartyController.DeleteParty)


router.route('/user/:id')
    .get(PartyController.GetPartiesByUserId)

    
router.route('/')
    .post(PartyController.CreateParty)

module.exports = router;