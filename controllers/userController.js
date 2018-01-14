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

	static DeleteUser(req, res){
		UserModel.findByIdAndRemove({
			_id: req.params.id
		})
		.then((user) => {
			res.json({message: "deleted"}).status(204);
		})
		.catch((error) => {
			res.status(500).send({ error });
		})
	}

	static GetUserById(req, res){
		UserModel.findById({ _id: req.params.id })
			.then((user) => {
				res.json({ "user": user }).status(204);
			})
			.catch((error) => {
				res.status(500).send({ error })
			})
	}

}

module.exports = UserController;
