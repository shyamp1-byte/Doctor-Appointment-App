//v = 4/3pi(r**3)

let volume = null;
const pi = 3.14
let radius = 1;

for(radius=1;radius<=10;radius++) {
    volume = 4/3*(pi)*(radius**3)
    console.log("The Radius is " +radius, "and The Volume is " +volume)
}