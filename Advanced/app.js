const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Good Morning!')
})


app.get('*', (req, res) => {
  res.send('404 - No data found for your request');
})

app.get('/HELP', (req, res) => {
  res.send('CALL US 9898987978979');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})