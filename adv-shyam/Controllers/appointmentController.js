const appointmentModel = require("../Model/appointmentModel");
const userModel=require("../Model/userModel");
const docModel =require("../Model/docModel");
const {generateNewAppointmentID}=require('./../Utils/utils');
const {decodeToken}=require("../Middleware/auth");
const bcrypt = require("bcrypt");

const createNewAppointment = async (req, res) => {

const patientID=await decodeToken(req);
// Check patient ID is valid or not ::: START
const patientInfo=await userModel.find({"UID":patientID});

req.body.patientName=patientInfo[0].fullName.firstName;
// Check patient ID is valid or not ::: END



// Check doctor ID is valid or not ::: START
const doctorID=await docModel.find({"doctorId":req.body.doctorId});

if(doctorID[0].DID!==req.body.doctorId){
  return res.status(403).send('This doctor ID is not registred / Invalid');
}
// Check doctor ID is valid or not ::: END

// Updating the request body with nessicary data to store ::: START
req.body.doctorSpecialization=doctorID[0].specialization;
req.body.doctorName=doctorID[0].fullName.firstName;
req.body.isCancelled="NO";
req.body.cancellationReason="NA";
req.body.fee=doctorID[0].fee;
req.body.tax=25;
req.body.appointmentStatus="Booked";
// Updating the request body with nessicary data to store ::: END


 // Auto Incriment Appointment ID  START
 const appointments = await appointmentModel.find().sort({appointmentId: -1}).limit(1); // to get the lastest UID from MONGO
 const appointmentId = appointments[0]?.appointmentId || 'AID-20230001';
 req.body.appointmentId = generateNewAppointmentID(appointmentId);
 // Auto Incriment USER ID  END


  // PREPARING MODEL (START)
  const appointment = new appointmentModel(req.body);
  // PREPARING MODEL (END)

  const registeredAppointment = await appointmentModel.find().count({appointmentId: req.body.appointmentId});
  if (registeredAppointment>0) {
      return res.status(403).send('This Appointment ID is already registered');
  }


  try {
    await appointment.save();  // Heart ❤️ of this function - Saving into the Database
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

const cancelAppointment = async (req, res) => {

  const patientID=await decodeToken(req);
  const appointmentInfo=await appointmentModel.find({"appointmentId":req.body.appointmentId});
  console.log(patientID)
  console.log(appointmentInfo)
  res.status(200).send([])
}

module.exports = {
  createNewAppointment,
  getAllAppointments,
  cancelAppointment,
};
