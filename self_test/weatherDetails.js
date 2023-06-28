const axios= require('axios')

async function fetchWeatherdetails(){
    
    axios.get('https://api.openweathermap.org/data/2.5/weather?lat=40.741895&lon=-73.989308&appid=b133bf7fe17429e815398f70dd780ce8')

  .then(function (response) {
    // handle success
    //console.log(response.data);
    return response.data;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
    return error
  })
  .finally(function () {
    // always executed
  });
  }

  module.exports= fetchWeatherdetails;