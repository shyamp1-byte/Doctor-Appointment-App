const carModel = require("../Model/carModel");
const bcrypt = require('bcrypt');

const createNewcar = ('/cars', async (req, res) => {
    const car = new carModel(req.body);
  
    try {
      await car.save();
      res.status(201).send({"message":"You have registred new car successfully"});
    } catch (e) {
      res.status(400).send(e);
    }
  });

  module.exports = {
    createNewcar
  };