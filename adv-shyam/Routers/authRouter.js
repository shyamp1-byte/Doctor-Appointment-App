const express = require('express');
const router = new express.Router();
const authController = require("../Controllers/authController")

router.route('/')
.post(authController.userLogin);


module.exports = router;