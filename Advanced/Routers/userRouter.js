const express = require('express');
const router = new express.Router();
const userController = require("../Controllers/userController")

router.route('/')
.post(userController.createNewUser)
.get(userController.getAllUsers);

router.route('/:email')
.get(userController.getUsersByEmail);

module.exports = router;