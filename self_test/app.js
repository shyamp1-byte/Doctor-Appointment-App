const express = require('express')
const app = express()
const port = 3000
const printNumbers = require('./numbers');
const axios= require('axios')
// const fetchWeatherdetails = require('./weatherDetails')

https://api.openweathermap.org/data/2.5/weather?lat=40.741895&lon=-73.989308&appid=b133bf7fe17429e815398f70dd780ce8

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/numbers', (req, res) => {
  let finalresult = printNumbers(); // here i have called the function
  res.send(finalresult)
})

// app.get('/weatherdetails', async (req, res) => {
//   let weatherResult = await fetchWeatherdetails();
//   console.log("Test Shyam: ")
//   console.log(fetchWeatherdetails)
//   res.send(weatherResult)
// })

app.get('/weatherdetails2', async (req, res) => {
  axios.get('https://api.openweathermap.org/data/2.5/weather?lat=40.741895&lon=-73.989308&appid=b133bf7fe17429e815398f70dd780ce8')

    .then(function (response) {
      // handle success
      //console.log(response.data);
      console.log("Success");
      res.send(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log("Error");
      console.log(error);
      res.send(error);
    })
    .finally(function () {
      // always executed
      console.log("Finally");
    });
}

)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
