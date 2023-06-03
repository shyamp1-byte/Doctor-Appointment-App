function shutdownRiceCooker() {
    console.log("Rice cooker is shutting down...");
    // Additional shutdown logic can be added here
  }
  
  // Set the running time in milliseconds (e.g., 30 minutes)

  
  // Schedule the shutdown after the running time
  console.log("Cooker Started");
  setTimeout(shutdownRiceCooker, 5000);
  

let time =1;
for (time;time<=24;time++){
    if(time<=12){
        console.log(time,"It is AM, Good Morning...!");
    }
    // else if(time<16){
    //     console.log(time,"Good Afternoon");
    // }
    else {
        console.log(time,"It is PM, Good Evening/Good Night");
    }
}

