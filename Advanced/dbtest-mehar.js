const mongoose = require('mongoose'); //This line is used to import the package
mongoose.connect('mongodb+srv://admin:adminpassword@cluster0.bh69ezs.mongodb.net/?retryWrites=true&w=majority'); //This line contains the database
const Patient = mongoose.model('Patient', { name: String, age: Number, city: String, disease: String }); //This line defines all of patient data (what it should look like)



async function createNewPatient(data) {
    const patient_information = new Patient(data); //Creating new object for data
    patient_information.save().then(() => console.log("Data inserted successfully")); //Inserting record into database
}


// async function deletePatient(filter) {                 //DELETING DATA
//     await Patient.deleteOne({ _id: '648fefdb34fd8c199ee423db' });
//     console.log(await Patient.countDocuments({ _id: '648fefdb34fd8c199ee423db' })); // 0
// }

// async function updatepatient(filterdata,data) {                         //UPDATING DATA
//     const filter = filterdata;
//     const update = data;

//     let doc = await Patient.findOne(filter);

//     doc.age = update.age;
//     await doc.save();

//     doc = await Patient.findOne();
//     doc.name;
//     doc.age;
// }


// async function findPatient(filterdata) {                         //UPDATING DATA
//     const filter = filterdata;
//     let doc = await Patient.findOne({ name: 'Meher' });
//    console.log(doc);
// }

let patientdata=[
{ name: "shyam-1", age: 20, city: "Hyderabad", disease: "Liver" },
{ name: "shyam-2", age: 20, city: "Hyderabad", disease: "Liver" },
{ name: "shyam-3", age: 20, city: "Hyderabad", disease: "Liver" },
{ name: "shyam-4", age: 20, city: "Hyderabad", disease: "Liver" },
{ name: "shyam-5", age: 20, city: "Hyderabad", disease: "Liver" },
{ name: "shyam-6", age: 20, city: "Hyderabad", disease: "Liver" },
{ name: "shyam-7", age: 20, city: "Hyderabad", disease: "Liver" },
{ name: "shyam-8", age: 20, city: "Hyderabad", disease: "Liver" },
{ name: "shyam-9", age: 20, city: "Hyderabad", disease: "Liver" },
{ name: "shyam-10", age: 20, city: "Hyderabad", disease: "Liver" },
{ name: "shyam-11", age: 20, city: "Hyderabad", disease: "Liver" },
{ name: "shyam-12", age: 20, city: "Hyderabad", disease: "Liver" },
{ name: "shyam-13", age: 20, city: "Hyderabad", disease: "Liver" },
{ name: "shyam-14", age: 20, city: "Hyderabad", disease: "Liver" },
{ name: "shyam-15", age: 20, city: "Hyderabad", disease: "Liver" },
{ name: "shyam-16", age: 20, city: "Hyderabad", disease: "Liver" },
{ name: "shyam-17", age: 20, city: "Hyderabad", disease: "Liver" },
{ name: "shyam-18", age: 20, city: "Hyderabad", disease: "Liver" },
{ name: "shyam-19", age: 20, city: "Hyderabad", disease: "Liver" },
{ name: "shyam-20", age: 20, city: "Hyderabad", disease: "Liver" },
]


patientdata.map((x)=>{
    createNewPatient(x);
});