// INPUT "SHYAM"
// OUTPUT "MAYHS" 
// Print your string in the reverse order

let name='SHYAM';
console.log(name);
let namearray=name.split("");  // converting the string into an array
console.log(namearray);
let result=[];

for (let i=namearray.length-1;i>=0;i--){
    result.push(namearray[i]);
    console.log(namearray[i]);
}
// option-1 inbuilt Reverse fuction
// Option-2 for loop and push function (we followed this)

console.log("Result is :", result.join("")); // converting the array into string
