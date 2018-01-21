const UserModel = require('../models/userModel');

class LoginController {

	static PostLoginforUser(req, res) {
		const user = req.body;
		console.log(user);
		UserModel.findOne(user)
		.then((user) => {
			console.log("===inside then ===>", user)
			return res.status(200).send(user)
		})
		.catch((error) => {
			console.log("===inside catch ===>", error)
			return res.status(500).send(error)
		})
	}

	static GetLoginforUser(req, res){
		res.status(200).send(user);
	}
}

module.exports = LoginController;