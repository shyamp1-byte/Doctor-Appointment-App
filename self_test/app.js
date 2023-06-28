const express = require('express')
const app = express()
const port = 3000
const printNumbers=require('./numbers');


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/numbers', (req, res) => {
  let finalresult=printNumbers(); // here i have called the function
  res.send(finalresult)
  })
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
