const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Good Morning!')
})


app.post('/test', function (req, res) {
  const data = req.body;
  console.log(data);

  res.send("SUCCESS");
});

app.get('*', (req, res) => {
  res.send('404 - No data found for your request');
})

app.get('/HELP', (req, res) => {
  res.send('CALL US 9898987978979');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})