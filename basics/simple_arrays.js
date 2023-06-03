// Homogenious  (Same Data type)  C / C++ / Java / GO
let numbers=[10,20,30,50,70,80];  // Number array
let floatnumbers=[10.4,23.3,55.2,77.6];  // Float Array
let counries=["india","USA","China","Japan"]; // String Array

// console.log(numbers,floatnumbers,counries);

// Heterogenious (Different Data type)  Python / Javascript 
let userInformation=['mehar chaitanya',29,'hyderabad',true,65.7]; // Different data type

console.log(userInformation[0],",", typeof(userInformation[0]));
console.log(userInformation[1],",", typeof(userInformation[1]));
console.log(userInformation[2],",", typeof(userInformation[2]));
console.log(userInformation[3],",", typeof(userInformation[3]));
console.log(userInformation[4],",", typeof(userInformation[4]));
console.log(userInformation,",",  typeof(userInformation));

for (x=0;x<=4;x++) {
    console.log(userInformation[x])
}