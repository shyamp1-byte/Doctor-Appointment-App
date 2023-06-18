const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('This is Shyam!')
})

app.get('/Patients', (req, res) => {
    const patients=[
      {username:"Mehar",city:"Hyd",disease:"Vomit"},
      {username:"Shyam",city:"DEL",disease:"Disease Free"},
      {username:"Ram",city:"BAN",disease:"Cough"},
      {username:"Naveen",city:"NOI",disease:"Leg Pain"},
      {username:"John",city:"VSK",disease:"Cancer"},
      {username:"Chaitanya",city:"CHE",disease:"Pancreaitis"}
    ]
    res.send(patients);
  })
  
  app.get('/Signup', (req, res) => {
    res.send('Sign Up to register for an appointment w/ Dr. Singh');
  })
  
  
  app.get('/Check', (req, res) => {
    res.send('Check to see if you are registered for an appointment');
  })
  
  app.get('/Help', (req, res) => {
    res.send('Call us @ +1 (801)-235-9201');
  })

  app.get('*', (req, res) => {
    res.send('404 - The url address you have typed does not match our databases');
  })

app.listen(port, () => {
  console.log(`Cars application: ${port}`)
})