const userModel = require("./../Model/userModel");
const bcrypt = require('bcrypt');

const createNewUser = async (req, res) => {
  const salt = await bcrypt.genSaltSync(10);  //generating random salt
  const hashedPassword = await bcrypt.hashSync(req.body.password, salt); //mixing password entered by user with salt
  req.body.password = hashedPassword; //updated password with hashed generated password 
  const user = new userModel(req.body);

  try {
    await user.save();
    res.status(201).send({ "message": "You have registred successfully" });
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