
const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
require('./Database/mongoose');


const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('mongo Database is  connected successfully!');
});


app.get('/', (req, res) => {
  res.send('This is Shyam!')
})
app.use('/users', require('./Routers/userRouter'));

app.listen(port, () => {
  console.log(`Cars application: ${port}`)
})