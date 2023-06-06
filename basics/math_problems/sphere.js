//v = 4/3pi(r**3)


let volume = null;
const pi = 3.14
let radius = 1;

for(radius=1;radius<=10;radius++) {
    volume = 4/3*(pi)*(radius**3)
    console.log("The Radius is " +radius, "and The Volume is " +volume)
}

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

