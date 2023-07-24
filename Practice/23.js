// Find HCF or GCD

let hcf;

let a = 10
let b = 50

for (let i = 1; i <= a && i <= b; i++) {
    if( a % i == 0 && b % i == 0) {
        hcf = i;
    }
}
console.log(hcf)