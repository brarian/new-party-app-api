const UserModel = require('../models/userModel');

class LoginController {

	static PostLoginforUser(req, res) {
		const {userName, password} = req.body;
		User.findOne({email})
		.then((user) => {
			return res.send(user)
		})
		.catch((error) => {
			res.send(error)
		})
	}

	static GetLoginforUser(req, res){
		res.status(200).send(user);
	}
}

module.exports = LoginController;