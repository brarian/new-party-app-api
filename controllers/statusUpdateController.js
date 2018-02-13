/*eslint-disable no-unused-vars */

const StatusModel = require('../models/statusUpdateModel');

class StatusController {
    
    static GetStatus(req, res) {
        res.send('the status controller').status(204);
    }

    static EditStatusById(req, res){
        StatusModel.findByIdAndUpdate({ _id: req.params.id })
        .then((updatedStatus) =>{
            res.send("an updated status").status(204);
        })
    }
}

module.exports = StatusController;