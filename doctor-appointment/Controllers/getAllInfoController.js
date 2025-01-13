const appointmentModel = require("../Model/appointmentModel");
const userModel = require("../Model/userModel");
const docModel = require("../Model/docModel");
const auth=require("../Middleware/auth");

const getAllInfo = async (req, res) => {
  try {
    const allusersCount = await userModel.count({});
    const allDoctorsCount = await docModel.count({});
    const allAppointmentsCount = await appointmentModel.count({});
    const cancelledAppointments = await appointmentModel.count({"isCancelled":true});
    
    const finalResult = {
      "allUsersCount":allusersCount,
      "allDoctorsCount":allDoctorsCount,
      "allAppointmentsCount":allAppointmentsCount,
      "cancelledAppointments":cancelledAppointments
    }

    res.status(200).send(finalResult);
    
  } catch (e) {
    res.status(400).send(e);
  }
};


module.exports = {
    getAllInfo,
  };
  
