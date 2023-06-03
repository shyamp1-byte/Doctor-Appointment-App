var dob = prompt("Please enter your date of birth (MM/DD/YYYY):");

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
alert("Your age is: " + age);