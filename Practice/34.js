// Sort words in Alphabetical order

let string = "I am Shyam";
//splits into array
let words = string.split(" ");

words.sort();

for (let element of words) {
  console.log(element);
}
