// Check if a key exists in an object

const person = {
    name: "shyam",
    age: 20
}
const key = "name" in person;

if(key) {
    console.log("The key exists")
} else {
    console.log("Key does not exist")
}