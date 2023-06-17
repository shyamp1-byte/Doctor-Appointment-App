const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Good Morning!')
})

app.get('/USERS', (req, res) => {
  const users=[
    {username:"mehar",city:"Hyd"},
    {username:"shyam",city:"DEL"},
    {username:"ram",city:"BAN"},
    {username:"naveen",city:"NOI"},
    {username:"john",city:"VSK"},
    {username:"chaitanya",city:"CHE"}
  ]
  res.send(users);
})

app.get('/SIGN-UP', (req, res) => {
  res.send('im from SIGN-UP');
})


app.get('/FORGOT', (req, res) => {
  res.send('im from FORGOT PASSWORD ');
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