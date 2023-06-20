const mongoose = require("mongoose"); //This line is used to import the package
mongoose.connect(
  "mongodb+srv://admin:adminpassword@cluster0.bh69ezs.mongodb.net/?retryWrites=true&w=majority"
); //This line contains the database
const Patient = mongoose.model("Patient", {
  name: String,
  age: Number,
  city: String,
  disease: String,
}); //This line defines all of patient data (what it should look like)



//CREATING DATA
const patient_information = new Patient({
  name: "John",
  age: 45,
  city: "Hyderabad",
  disease: "Liver",
}); //Creating new object for data
patient_information
  .save()
  .then(() => console.log("Data inserted successfully")); //Inserting record into database



// async function deleterecord() {                 //DELETING DATA
//     await Patient.deleteOne({ _id: '648fefdb34fd8c199ee423db' });

//     console.log(await Patient.countDocuments({ _id: '648fefdb34fd8c199ee423db' })); // 0
//   }

//   deleterecord();



// async function start() {                         //UPDATING DATA
//     const filter = { name: 'Meher' };
// const update = { age: 50 };

// let doc = await Patient.findOne({ name: 'Meher' });

// doc.age = update.age;
// await doc.save();

// doc = await Patient.findOne();
// doc.name;
// doc.age;
// }
// start()



// async function findPatient(filterdata) {                         //FINDING DATA
//     const filter = filterdata;
//     let doc = await Patient.findOne({ name: 'Meher' });
//    console.log(doc);
// }




//SUPPOSED TO KEEP ONE OF THE FUNCTIONS COMMENTED AT A TIME
//EX. DELETE RECORD COMMENTED WHILE CREATING OBJECT UNCOMMENTED
//EX. CREATING OBJECT COMMENTED WHILE DELETE RECORD UNCOMMENTED
