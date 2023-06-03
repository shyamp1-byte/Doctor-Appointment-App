var dob = '02/01/2000';

// Calculate the age based on the current date
var today = new Date();
var birthDate = new Date(dob);
var age = today.getFullYear() - birthDate.getFullYear();
var monthDiff = today.getMonth() - birthDate.getMonth();

// Check if the user hasn't had their birthday this year yet
if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
  age--;
}

// Display the calculated age
console.log("Your age is: " + age);