const express = require('express');
const router = new express.Router();
const appointmentController = require("./../Controllers/appointmentController")

router.route('/')
.post(appointmentController.createNewAppointment)
.get(appointmentController.getAllAppointments);

module.exports = router;