const mongoose = require('mongoose');
const docSchema = require("../Schema/docSchema");

const docModel = mongoose.model('Doctors', docSchema);
module.exports = docModel;