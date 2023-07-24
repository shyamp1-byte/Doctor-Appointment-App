// Check number of occurences of a character in string
// program to check the number of occurrence of a character

let str = "Meher";
let letter = "e";
let count = 0;

for (let i = 0; i < str.length; i++) {
  if (str.charAt(i) == letter) {
    count += 1;
  }
}
console.log(count);
