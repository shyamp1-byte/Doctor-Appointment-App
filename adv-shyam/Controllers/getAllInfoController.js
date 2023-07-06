const appointmentModel = require("../Model/appointmentModel");
const userModel = require("../Model/userModel");
const docModel = require("../Model/docModel");

const getAllInfo = async (req, res) => {
  console.log("Get all Information");

  try {
    //const patientID = await decodeToken(req);
    //const patientInfo = await userModel.find({ UID: patientID });
    let alldoctors = await docModel.find({});
    let allusers = await userModel.find({});
    let allappointments = await appointmentModel.find({
        patientId: patientInfo[0].UID,
      });
    let finalResult = {
        alldoctors, allusers, allappointments 
    }
    res.status(200).send(finalResult);
  } catch (e) {
    console.log("catch Test", e);
    res.status(400).send(e);
  }
};


module.exports = {
    getAllInfo,
  };
  
