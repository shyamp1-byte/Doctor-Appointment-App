//v = 4/3pi(r**3)

// funciton will take "radius" as the input [and] prints "volume" as the output
function findSphereRadius(radius){
    const pi = 3.14; 
    let volume = 4/3*(pi)*(radius**3);
    return volume;
}

// for loop || inside we are calling the findSphereRadius function
for(let radius=1;radius<=100;radius++) {  
    console.log("The Radius is "+ radius, " Volume is : "+findSphereRadius(radius));
}

