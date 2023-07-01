const docModel = require ("../Model/docModel");
const bcrypt = require('bcrypt');
const {generateNewDoctorID} = require('../Utils/utils');

const createNewDoctor = async (req, res) => {

    const registeredEmail = await docModel.find().count({email: req.body.email});
    if (registeredEmail>0) {
        return res.status(403).send('This Email-ID is already registered');
    }

    const registeredPhoneNumber = await docModel.find().count({phoneNumber: req.body.phoneNumber});
    if (registeredPhoneNumber>0) {
    return res.status(403).send('This Phone Number is already registred');
  }

    const doctors = await docModel.find().sort({DID: -1}).limit(1);
    const DID = doctors[0]?.DID || '20230001';
    req.body.DID = generateNewDoctorID(DID);

    const salt = await bcrypt.genSaltSync(10);  //generating random salt
    const hashedPassword = await bcrypt.hashSync(req.body.password, salt); //mixing password entered by user with salt
    req.body.password = hashedPassword; //updated password with hashed generated password 

    const doctor = new docModel(req.body);

    try {
        await doctor.save();
        const result = {email: doctor.email, phoneNumber: doctor.phoneNumber, ID: doctor.DID};
        res.status(201).send(result);
    }   catch (e) {
            res.status(400).send(e)
        }
};


const getAllDoctors = async (req, res) => {
    try {
      let alldoctos = await docModel.find({});
      res.status(200).send(alldoctors);
    } catch (e) {
      res.status(400).send(e);
    }
  };

  module.exports = {
    createNewDoctor,
    getAllDoctors
  };