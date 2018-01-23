const Authentication = require('../middleware/authentication');
const UserModel = require('../models/userModel');

class UserController {

	static CreateUser(req, res){
		const UserDetails = req.body;
		console.log("============ user details ===>", req.body)
		const newUser = new UserModel(UserDetails);
		newUser.save()
		.then((user) => {
			// make this so it automatically generates token and sends it back to the frontend
				const token = Authentication.AuthenticateUser(user);
				return res.status(201).send({token, message:" new user created"})
		})
		.catch((error) => {
			console.log("ERROROROROR", error.message)
			return res.status(500).send(error);
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
			res.status(204).send({ error });
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

	static EditUser(req, res) {
		UserModel.findByIdAndUpdate(req.params.id, {
			$set: req.body
		}, {new: true})
		.then((updatedUser) => {
			res.status(204).send({ updatedUser })
		})
	}

}

module.exports = UserController;
