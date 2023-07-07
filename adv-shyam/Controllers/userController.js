const userModel = require("../Model/userModel");
const bcrypt = require('bcrypt');
const {generateNewUserID}=require('./../Utils/utils');



const createNewUser = async (req, res) => {

// CHECK EMAIL IS EXIST OR NOT (START)
  const registeredEmail = await userModel.find().count({email: req.body.email});
  if (registeredEmail>0) {
    return res.status(403).send('This Email-ID is already registred');
  }
  // CHECK EMAIL IS EXIST OR NOT (END)


  // CHECK PhoneNO IS EXIST OR NOT (START)
  const registeredPhoneNumber = await userModel.find().count({phoneNumber: req.body.phoneNumber});
  if (registeredPhoneNumber>0) {
    return res.status(403).send('This Phone Number is already registred');
  }
   // CHECK PhoneNO IS EXIST OR NOT (END)


  // Auto Incriment USER ID  START
  const users = await userModel.find().sort({UID: -1}).limit(1); // to get the lastest UID from MONGO
  const UID = users[0]?.UID || '20230001';
  req.body.UID = generateNewUserID(UID);
  // Auto Incriment USER ID  END

   // HASH PASSWORD (START)
  const salt = await bcrypt.genSaltSync(10);  //generating random salt
  const hashedPassword = await bcrypt.hashSync(req.body.password, salt); //mixing password entered by user with salt
  req.body.password = hashedPassword; //updated password with hashed generated password 
   // HASH PASSWORD (END)

    // PREPARING MODEL (START)
  const user = new userModel(req.body);
    // PREPARING MODEL (END)

  try {
    await user.save();
    const result = {email: user.email, phoneNumber: user.phoneNumber, ID: user.UID};
    res.status(201).send(result);
  } catch (e) {
    res.status(400).send(e);
  }
};


// Get all users change-1
const getAllUsers = async (req, res) => {
  try {
    let allusers = await userModel.find({});
    res.status(200).send(allusers);
  } catch (e) {
    res.status(400).send(e);
  }
};

const getUsersByEmail = async (req, res) => {
  console.log("getUsersByEmail method triggred")
  const email = req.params.email;
  console.log("Email is ", email);

  try {
    const users = await userModel.find({ "email": email});
    console.log("users Data: ", users);

    if (!users) {
      return res.status(404).send("No users found with this color.");
    }

    res.send(users);
  } catch (e) {
    res.status(500).send("Internal server error.");
  }
};



module.exports = {
  createNewUser,
  getAllUsers,
  getUsersByEmail
};