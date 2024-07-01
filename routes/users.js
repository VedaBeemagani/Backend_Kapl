const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authenticate = require('../middleware/authenticate');

router.route('/login').post(userController.loginUser);
router.route('/').post(userController.createUser);
router.route('/').get(userController.getAllUsers);
router.route('/:username').get(userController.getUserByUsername);
router.route('/:id').patch(userController.updateUserById);
router.route('/:id').delete(userController.deleteUserById);

module.exports = router;
