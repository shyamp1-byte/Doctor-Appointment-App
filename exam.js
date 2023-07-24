// Same program with for loop
for (let i=0; i<5; i++) {
   let a = Math.floor(Math.random()*101);
  console.log(a+" question")
}

// 1st question (print Hello World):
console.log("Hello World")

//20 question (Simple Calculator):

let a = 10
let b = 5
let operator = "+"

if (operator == "+") {

}

//23 question (Find HCF): 

let c = 10
let d = 5
let hcf;

for (let i = 0; i<= c & i<=d; i++) {
    if (c%i == 0 & d%i ==0) {
        hcf = i
    }
}
console.log(hcf)

//36 question (Javascript program to replace string in a sentence):

let sentence = "My name is Shyam"
let sentence2 = sentence.replace("Shyam", "Meher")
console.log(sentence2)

//37 question (Creating object):

let student = {
    name: "Shyam",
    age: 20,
    dob: 2003
}
student.phone = "Iphone"
console.log(student)
console.log(student.name)

//21 question (Find sum of natural numbers):

let finalNumber = 100
let sum = (finalNumber*(finalNumber+1))/2;
console.log(sum)

//69 question (Insert item into array):

let week = ["Monday", "Tuesday", "Wednesday"]
week.push("Thursday")
week.splice(2, 0, "Sunday")
console.log(week.join())

// console.log(arr.join()); // Jani,Hege,Stale,Kai Jim,Borge
// week.splice(2, 0, "Lene");
// console.log(arr.join()); // Jani,Hege,Lene,Stale,Kai Jim,Borge

// 