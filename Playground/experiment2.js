function getTemperatureInfo() {
    console.log("Display temperature " + Date.now());
  }
  
  // Set the interval time in milliseconds (e.g., 3 seconds)
  const intervalTime = 1000; //half
  
  // Start printing the message at the specified interval
  setInterval(getTemperatureInfo, intervalTime);