// Find LCM

let hcf;
let lcm;

let a = 10
let b = 50

for (let i = 1; i <= a && i <= b; i++) {
    if( a % i == 0 && b % i == 0) {
        hcf = i;
    }
}
lcm = (a*b)/hcf

console.log(lcm)