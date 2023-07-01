const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
//mongoose.connect("mongodb://127.0.0.1:27017/myapp", {}); //destination is myapp in mongosh terminal (hyderabad)
mongoose.connect("mongodb+srv://admin:adminpassword@cluster0.bh69ezs.mongodb.net/?retryWrites=true&w=majority", {});// desitination is mongo cloud (virginia)
// 'mongodb://127.0.0.1:27017/myapp'
