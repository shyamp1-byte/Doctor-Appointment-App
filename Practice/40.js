// Count number of vowels in a string

let vowels = ["a", "e", "i", "o", "u"];
let str = "Shyam";

let count = 0;

for (let letter of str.toLowerCase()) {
  if (vowels.includes(letter)) {
    count++;
  }
}
console.log(count);
