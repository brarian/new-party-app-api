const JWT = require('jsonwebtoken');
const config = require('../config');
const SECRETKEY = process.env.SECRET || "LIGHTBLUEOCEAN";

class Authentication{
    static AuthenticateUser(req, res, next){
        const token = req.headers.authorization ||
            req.headers['x-access-token'] ||
            req.body.token;
        if (token){
            JWT.verify(token, SECRETKEY, (error, decoded)=> {
                if (error ) {
                    res.status(401).send({message: 'you are not authorized to be on this page'})
                }
                else {
                    req.decoded = decoded;
                    next();
                }
            })
        }
        else {
            res.status(401).send({message: 'you are not authorized to be on this page'})
        }
    }

		static GenerateToken(user){
			return JWT.sign({
				userName: user.userName,
				userId: user._id,
				email: user.email
			}, SECRETKEY, {
				expiresIn: config.JWT_EXPIRY
			})
			
		}
}

module.exports = Authentication;