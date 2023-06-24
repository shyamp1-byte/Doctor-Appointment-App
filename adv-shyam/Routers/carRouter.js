const express = require('express');
const router = new express.Router();
const carController = require("../Controllers/carController")

router.route('/')
.post(carController.createNewcar)
.get(carController.getAllCars);

router.route('/:cc')
.get(carController.getCarsByCC);



module.exports = router;