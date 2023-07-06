const appointmentModel = require("../Model/appointmentModel");
const userModel = require("../Model/userModel");
const docModel = require("../Model/docModel");
const auth=require("../Middleware/auth");

const getAllInfo = async (req, res) => {
  try {
    const allusersCount = await userModel.count({});
    let allDoctorsCount = await docModel.count({});
    let allAppointmentsCount = await appointmentModel.count({});
    let finalResult = {
      "allUsersCount":allusersCount,
      "allDoctorsCount":allDoctorsCount,
      "allAppointmentsCount":allAppointmentsCount
    }

    res.status(200).send(finalResult);
    
  } catch (e) {
    res.status(400).send(e);
  }
};


module.exports = {
    getAllInfo,
  };
  
