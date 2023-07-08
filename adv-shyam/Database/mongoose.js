const mongoose = require('mongoose');
const dotenvConfig = require('dotenv').config();

mongoose.set('strictQuery', true);
//mongoose.connect("mongodb://127.0.0.1:27017/myapp", {}); //destination is myapp in mongosh terminal (hyderabad)
mongoose.connect(dotenvConfig.parsed.MONGODB_URI, {});// desitination is mongo cloud (virginia)
// 'mongodb://127.0.0.1:27017/myapp'
