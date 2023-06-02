// Function and method both are same.
//Functions and Parameters

// 1 Python Programming 
// def greeting(){
//     print("Good Morning Python...!")
// }


// 2 Java Programming 
// public void greeting(){
//     System.out.println("Good Morning  Java");
// }

// Javascript  this is just for your understanding English Verbs (V1,V2,V3)



// Step-1 Creating/ Defining  Function
function add(number1, number2){
    let total = number1 + number2;
    return total;
}

function subtract(number1, number2) { //shortcut without the let total
    return number1 - number2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2
}

// Step-2 Calling the same function to run
let result =add(10,20);
console.log(result);
// Advantage: you can re-use the function multiple times and in multiple locaitons / 
// No need to type or recrete the similar program

let result2 =subtract(50,10);
console.log(result2);

let result3 =multiply(2,4);
console.log(result3);

let result4 =divide(64,8);
console.log(result4);




