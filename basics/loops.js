// Loop / Iteration / Repeating the same thing 

function calculateCircleInfo(radius) {
    const pi = 3.14;
    let circumference = 2 * pi * radius;
    let area = pi * radius * radius;
    return {
        "Circumference ": circumference, "Area ": area
    }
}

// Components of loop
//  1) initial value  ::: let x=0
//  2) condition      ::: x<=5
//  3) incriment / decement  ::: x++ 

// Example-1 
for (let x = 1; x <= 10; x++) { // starting point
    console.log("Circle Radius is :" + x);
    console.log(calculateCircleInfo(x));
} // Ending point


// loop with 1)for & 2)Map fuction

let weekdays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "satruday"];
// Type -1  Example-2
for (let y = 0; y < weekdays.length; y++) {
    console.log(y + 1, weekdays[y]);
}

// Type -2  Example-3
weekdays.map((z) => {
    console.log(z);
})


// DO While Loop
console.log("Below result is of Do While Loop");
let q=20
do {
    console.log("q is : ",q);
    q++;
} while (q <= 25);


// While Loop
console.log("Below result is of While Loop");
let p=100;  
while (p<=110)  
{  
console.log("p is :",p)
p++;  
}  