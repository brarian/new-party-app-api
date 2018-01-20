const express = require('express');
const router = express.Router();

const LoginController = require('../controllers/loginController');

router.route('/')
    .get(LoginController.GetLoginforUser)
    .post(LoginController.PostLoginforUser)
    
module.exports = router;

