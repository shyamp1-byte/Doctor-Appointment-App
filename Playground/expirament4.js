
var dob = '02/01/2000';

const dob = "03/31/2003";


// Calculate the age based on the current date
const today = new Date();
const birthDate = new Date(dob);
const age = today.getFullYear() - birthDate.getFullYear();
const monthDiff = today.getMonth() - birthDate.getMonth();

// Check if the user hasn't had their birthday this year yet
if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
  age--;
}

// Display the calculated age
console.log("Your age is: " + age);