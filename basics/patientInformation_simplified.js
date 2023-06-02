// Here we will store the patient information into the javascript
// Variables and printing the same

// Declaring Object with some values

const patientInformation = {   //patientInformation is object
    name: 'Mehar Bandaru',
    DOB: new Date('02-02-1995'),
    gender: "Male",
    weight: 65,
    sugarLevels: null,
    bloodPressure: '120/80',
    bodyTemperature: '98.F',
    clinicalCondition: 'Not Feeling well since 3 days',
    previousDiseaseList: ['eyes', 'nose', 'headeache'],
    city: 'Hyderabad',
    country: 'India',
    phoneNumer: '+91-98978567844',
    zipCode: 500032,
    isIndian: true,
}

// Priting the Values along with the Data Size in bytes & Type
// to print the occupied memory in bytes
const bytes = new TextEncoder();
const keysList=Object.keys(patientInformation);
console.log(keysList);

keysList.map(x=>{
    console.log(x +" is : " + patientInformation[x] + ' with Data Size in bytes ' + bytes.encode(patientInformation[x]).length + ' Type in javascript as ' + typeof (patientInformation[x]));
});
