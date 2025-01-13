const bcrypt = require('bcrypt');
const userModel = require("../Model/userModel");
const auth = require("../Middleware/auth");



const userLogin = async (req, res) => {

  const userInfo = await userModel.find({ email: req.body.email });

  // CHECK EMAIL IS EXIST OR NOT (START)
  if (!userInfo.email === req.body.email) {
    return res.status(403).send('This Email-ID is not exist');
  }
  // CHECK EMAIL IS EXIST OR NOT (END)


  // COMPARE  HASH PASSWORD AND PASSWORD ENTERED BY USER(START)
  const salt = await bcrypt.genSaltSync(10);  //generating random salt

  const isCorrectPassword = await bcrypt.compareSync(req.body.password, userInfo[0]?.password);
  if (!isCorrectPassword) {
    return res.status(403).send('invalid Password');
  }
  // COMPARE  HASH PASSWORD AND PASSWORD ENTERED BY USER(END)
  const tokenPayload = { "fullName": userInfo[0].fullName, "UID": userInfo[0].UID }
  const newToken=await auth.createNewToken(tokenPayload);


  try {
    res.status(201).send({"token":newToken,"Message":"Congratulations you login details are verified. Please use this token for next action items"});
  } catch (e) {
    res.status(400).send(e);
  }
};





module.exports = {
  userLogin,
};