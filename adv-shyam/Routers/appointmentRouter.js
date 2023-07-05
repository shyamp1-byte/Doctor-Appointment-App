const express = require('express');
const router = new express.Router();
const appointmentController = require("./../Controllers/appointmentController")
const auth=require("./../Middleware/auth");

router.route('/')
.post(auth.verifyToken,appointmentController.createNewAppointment)
.get(appointmentController.getAllAppointments);

router.route('/cancelappointment')
.post(auth.verifyToken,appointmentController.cancelAppointment)

module.exports = router;