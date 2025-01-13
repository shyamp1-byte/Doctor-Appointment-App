const mongoose = require('mongoose');
const appointmentSchema = require("./../Schema/appointmentSchema");

const appointmentModel = mongoose.model('Appointments', appointmentSchema);
module.exports = appointmentModel;