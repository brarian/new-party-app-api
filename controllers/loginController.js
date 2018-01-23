const Authentication = require('../middleware/authentication');
const UserModel = require('../models/userModel');

class LoginController {

	static PostLoginforUser(req, res){
		const user = req.body;
		console.log(user);
		UserModel.findOne({ userName: user.userName })
		.then((user) => {
			if(user){
				const validUser = user.verifyPassword(req.body.password)
				if(validUser){
					const token = Authentication.GenerateToken(user);
		
					return res.status(200).send({token, message: "login successfull"})
				}
				return res.status(403).send({message: "password does not match"});
			}
			res.status(404).send({
				message: "user not found"
			})
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