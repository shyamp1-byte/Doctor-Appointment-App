const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

let users=[{
    name:"shyam",
    gender:"male"
},{
    name:"ram",
    gender:"male"
},{
    name:"sita",
    gender:"female"
},{
    name:"mehar",
    gender:"male"
},{
    name:"ramesh",
    gender:"male"
},{
    name:"michael",
    gender:"male"
}];

app.get('/users', (req, res) => {
    res.send(users)
  })

app.get('/users/invalid', (req, res) => {
    res.send("Invalid access to the application API -Backend service")
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})