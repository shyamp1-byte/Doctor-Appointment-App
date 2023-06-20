
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3000
const mongoose = require('mongoose');
require('./Database/mongoose');



// setting app
app.options('*', cors());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));


const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('mongo Database is  connected successfully!');
});


app.get('/', (req, res) => {
  res.send('This is Shyam!')
})

app.post('/test', function (req, res) {
  const data = req.body;
  console.log(data);

  res.send("SUCCESS");
});

app.use('/users', require('./Routers/userRouter'));



app.listen(port, () => {
  console.log(`Cars application: ${port}`)
})