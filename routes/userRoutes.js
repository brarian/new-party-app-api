//use users output to communicate with the database
const express = require('express');
const router = express.Router();

const UserController = require('../controllers/userController');


router.route('/:id')
    .get(UserController.GetUserById)
    // .put(UserController.EditUser)
    .delete(UserController.DeleteUser)
    
router.route('/')
    .post(UserController.CreateUser)

module.exports = router;

