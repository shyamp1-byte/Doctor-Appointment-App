//appointmentID
// doctorID
// doctorName
// doctorSpecialisation
// patientID
// patientName
// dateOfAppointment
// timeOfAppointment
// appointmentStatus:
// fee
// tax
// isCancelled
// cancellationReason

const mongoose = require("mongoose");
const { Schema } = mongoose;
const validator = require("validator");

const appointmentSchema = new Schema({
  appointmentId: {
    type: String,
    required: true,
    trim: true,
  },
  doctorId: {
    type: String,
    required: true,
    trim: true,
  },
  doctorName: {
    type: String,
    required: true,
    trim: true,
  },
  doctorSpecialization: {
    type: String,
    required: true,
    trim: true,
  },
  patientId: {
    type: String,
    required: true,
    trim: true,
  },
  patientName: {
    type: String,
    required: true,
    trim: true,
  },
  dateOfAppointment: {
    type: Date,
    required: true,
    trim: true,
    min: "2023-07-01",
    max: "2023-09-30",
  },
  appointmentStatus: {
    type: String,
    required: true,
    trim: true,
  },
  fee: {
    type: Number,
    required: true,
    trim: true,
  },
  tax: {
    type: Number,
    required: true,
    trim: true,
  },
  appointmentReason: {
    type: String,
    required: true,
    trim: true,
  },
  isCancelled: {
    type: Boolean,
    required: true,
    trim: true,
  },
  cancellationReason: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = appointmentSchema;
