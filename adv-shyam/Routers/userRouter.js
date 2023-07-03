const express = require('express');
const router = new express.Router();
const userController = require("./../Controllers/userController")
const auth=require("../Middleware/auth");

router.route('/')
.post(userController.createNewUser)
.get(auth.verifyToken,userController.getAllUsers);

router.route('/:email')
.get(userController.getUsersByEmail);

module.exports = router;