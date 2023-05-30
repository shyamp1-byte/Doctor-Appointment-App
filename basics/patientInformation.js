// Here we will store the patient information into the javascript
// Variables and printing the same

// 1) Name : Mehar Bandaru
// 2) DOB  : 02-10-1991
// 3) Gender: Male
// 4) Weight : ""
// 5) Sugar  :
// 6) Blood Pressure :
// 7) Body temperature:
// 8) Cinical Condition :
// 9) Previous Diseases List :
// 10) City
// 11) Country
// 12) Phone Number:
// 13) Zip Code 
// 14) isIndian



// Declaring Variables with some values
let name = "Mehar Bandaru";
let DOB = new Date('02-03-1991');
const gender = "Male";
let weight = 65;
let sugarLevels = null;
let bloodPressure = '120/80';
let bodyTemperature = '98.F';
let clinicalCondition = 'Not Feeling well since 3 days';
let previousDiseaseList = ['eyes', 'nose', 'headeache'];
let city = 'Hyderabad';
const country = 'India';
const phoneNumer = '+91-98978567844';
const zipCode = 500032;
const isIndian = true;


// Priting the Values along with the Data Size in bytes & Type

// to print the occupied memory in bytes
const bytes = new TextEncoder();


console.log("name is :" + name + ' with Data Size in bytes '+bytes.encode(name).length+' Type in javascript as ' + typeof (name));
console.log("DOB is :" + DOB + ' with Data Size in bytes '+bytes.encode(DOB).length+' Type in javascript as ' + typeof (DOB));
console.log("gender is :" + gender + ' with Data Size in bytes '+bytes.encode(gender).length+' Type in javascript as ' + typeof (gender));
console.log("weight is :" + weight + ' with Data Size in bytes '+bytes.encode(weight).length+' Type in javascript as ' + typeof (weight));
console.log("sugarLevels is :" + sugarLevels + ' with Data Size in bytes '+bytes.encode(sugarLevels).length+' Type in javascript as ' + typeof (sugarLevels));
console.log("bloodPressure is :" + bloodPressure + ' with Data Size in bytes '+bytes.encode(bloodPressure).length+' Type in javascript as ' + typeof (bloodPressure));
console.log("bodyTemperature is :" + bodyTemperature + ' with Data Size in bytes '+bytes.encode(bodyTemperature).length+' Type in javascript as ' + typeof (bodyTemperature));
console.log("clinicalCondition is :" + clinicalCondition + ' with Data Size in bytes '+bytes.encode(clinicalCondition).length+' Type in javascript as ' + typeof (clinicalCondition));
console.log("previousDiseaseList is :" + previousDiseaseList + ' with Data Size in bytes '+bytes.encode(previousDiseaseList).length+' Type in javascript as ' + typeof (previousDiseaseList));
console.log("city is :" + city + ' with Data Size in bytes '+bytes.encode(city).length+' Type in javascript as ' + typeof (city));
console.log("country is :" + country + ' with Data Size in bytes '+bytes.encode(country).length+' Type in javascript as ' + typeof (country));
console.log("phoneNumer is :" + phoneNumer + ' with Data Size in bytes '+bytes.encode(phoneNumer).length+' Type in javascript as ' + typeof (phoneNumer));
console.log("zipCode is :" + zipCode + ' with Data Size in bytes '+bytes.encode(zipCode).length+' Type in javascript as ' + typeof (zipCode));
console.log("isIndian is :" + isIndian + ' with Data Size in bytes '+bytes.encode(isIndian).length+' Type in javascript as ' + typeof (isIndian));



