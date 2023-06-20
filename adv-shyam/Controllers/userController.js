const userModel = require("./../Model/userModel");


const createNewUser = ('/users', async (req, res) => {
    const user = new userModel(req.body);
  
    try {
      await user.save();
      res.status(201).send(user);
    } catch (e) {
      res.status(400).send(e);
    }
  });

  module.exports = {
    createNewUser
  };