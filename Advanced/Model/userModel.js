const mongoose = require('mongoose');
const userSchema = require("../Schema/userSchema");

const userModel = mongoose.model('User', userSchema);
module.exports = userModel;