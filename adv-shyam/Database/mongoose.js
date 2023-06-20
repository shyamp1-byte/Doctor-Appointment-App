const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://admin:adminpassword@cluster0.bh69ezs.mongodb.net/?retryWrites=true&w=majority", {});