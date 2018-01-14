const UserModel = require('../models/userModel');


class UserController {
	static CreateUser(req, res){
		const UserDetails = req.body;
		const newUser = new UserModel(UserDetails);
		newUser.save()
		.then((user) => {
			res.status(201).send({ user });
		})
		.catch((error) => {
			res.status(400).send({ error });
		})
	}

	static EditUser(req, res){

	}

	static DeleteUser(req, res){

	}

	static GetUserById(req, res){

	}

}

module.exports = UserController;
