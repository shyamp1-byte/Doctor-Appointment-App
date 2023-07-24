// Solve Quadratic Equation

let a = 8
let b = 8
let c = 1

let d = (b*b-4*a*c)

let positive = (b + Math.sqrt(d)) / (2*a);
let negative = (-b + Math.sqrt(d)) / (2*a);

console.log(positive)
console.log(negative)