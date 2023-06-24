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

  const getAllCars = ('/cars', async (req, res) => {
    console.log("Get all cars method triggred")
    try {
      let allcars = await carModel.find({});
      res.status(201).send(allcars);
    } catch (e) {
      res.status(400).send(e);
    }
  });

  const getCarsByCC = ('/cars/:cc', async (req, res) => {
    console.log("getCarsByCC method triggred")
    const cc = req.params.cc;
    console.log("CC is ", cc);
  
    try {
      const cars = await carModel.find({ "cc": cc});
      console.log("cars Data: ", cars);
  
      if (!cars) {
        return res.status(404).send("No cars found with this color.");
      }
  
      res.send(cars);
    } catch (e) {
      res.status(500).send("Internal server error.");
    }
  });

  module.exports = {
    createNewcar, 
    getAllCars,
    getCarsByCC
  };