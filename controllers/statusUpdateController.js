/*eslint-disable no-unused-vars */

const StatusModel = require('../models/statusUpdateModel');

class StatusController {
    
    static GetStatus(req, res) {
        StatusModel.find({
            id: req.params.id
        })
        .then((status) => {
            res.send("get status").status(204);
        })
        .catch((error) => {
            res.status(500).send(error)
        })
    }

    static EditStatusById(req, res){
        StatusModel.findByIdAndUpdate(req.params.id, {
			$set: req.body
        }, {new: true})
        .then((updatedStatus) =>{
            res.send("it updated status").status(204);
        })
    }
}