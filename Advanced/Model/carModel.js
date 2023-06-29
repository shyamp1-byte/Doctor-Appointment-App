const mongoose = require('mongoose');
const carSchema = require("../Schema/carSchema");

const carModel = mongoose.model('Car', carSchema);
module.exports = carModel;