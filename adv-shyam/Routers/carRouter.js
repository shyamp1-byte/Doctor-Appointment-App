const express = require('express');
const router = new express.Router();
const carController = require("../Controllers/carController")

router.route('/')
.post(carController.createNewcar);

module.exports = router;