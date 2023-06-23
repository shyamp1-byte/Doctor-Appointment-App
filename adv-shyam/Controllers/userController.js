const userModel = require("./../Model/userModel");
const bcrypt = require('bcrypt');

const createNewUser = ('/users', async (req, res) => {
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
});


// Get all users change-1
const getAllUsers = ('/users', async (req, res) => {
  try {
    let allusers = await userModel.find({});
    res.status(201).send(allusers);
  } catch (e) {
    res.status(400).send(e);
  }
});


module.exports = {
  createNewUser,
  getAllUsers
};