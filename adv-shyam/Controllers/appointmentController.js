const appointmentModel = require("../Model/appointmentModel");
const bcrypt = require("bcrypt");

const createNewAppointment = async (req, res) => {
  // PREPARING MODEL (START)
  const appointment = new appointmentModel(req.body);
  // PREPARING MODEL (END)

  const registeredAppointment = await appointmentModel.find().count({appointmentId: req.body.appointmentId});
  if (registeredAppointment>0) {
      return res.status(403).send('This Appointment ID is already registered');
  }


  try {
    await appointment.save();
    res.status(201).send(appointment);
  } catch (e) {
    res.status(400).send(e);
  }
};

// Get all appointments
const getAllAppointments = async (req, res) => {
  try {
    let allappointments = await appointmentModel.find({});
    res.status(200).send(allappointments);
  } catch (e) {
    res.status(400).send(e);
  }
};

module.exports = {
  createNewAppointment,
  getAllAppointments,
};
