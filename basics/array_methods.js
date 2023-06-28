let userInformation=['mehar chaitanya',29,'hyderabad',true,65.7]; 

console.log(userInformation,",",  typeof(userInformation));

console.log("------------------------------")
console.log("LENGTH : Printing length of the array: ")
console.log(userInformation.length);
console.log("------------------------------")

console.log("-----------------------------")
console.log("INDEX : Printing 4th index of array: ")
console.log(userInformation[4])
console.log(userInformation[userInformation.length-1])
console.log("-----------------------------")



let fruits = ["Banana", "Orange", "Apple", "Mango", "Apricot"]
console.log("---------------------------------")
console.log("SORTING : length of fruits array: ")
console.log(fruits.length);
console.log("---------------------------------")
console.log(fruits)
console.log(fruits.sort())


console.log("-----------------------------")
console.log("POP : length of fruits array: ")
fruits.pop(); // POP means it will delete the last element in the array
console.log(fruits);
console.log("-----------------------------");


console.log("-----------------------------")
console.log("PUSH : length of fruits array: ")
fruits.push("Grapes"); // PUSH means it will add the element in the array
console.log(fruits);
console.log("-----------------------------");


