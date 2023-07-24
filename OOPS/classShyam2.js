//Creating the class with the name Patient
class Patient {

    //Creating Constructor Method; Not necessary, but will work without calling the method
    constructor() {
        console.log("Patient Initialization")
    }

    //Creating registerPatient Method with parameters inside ()
    registerPatient(patientName, patientAge, patientEmail, patientPhoneNumber) {
        let RegistrationID="APID-"+Math.floor(Math.random() * 10000);

        //Returning parameters called inside Method
        return {RegistrationID, patientName, patientAge, patientEmail, patientPhoneNumber}
    }
    //Creating cancelRegistration Method with Registration ID, which will cancel app.
    cancelRegistration(RegistrationID) {
        return{"message": "Registration has been cancelled"}
    }
}
class Nurse extends Patient{
    greeting() {
        console.log("Hello. I'm Nurse")
    }
} 

class Doctor extends Nurse {
    registerDoctor(doctorName, doctorAge, doctorEmail, doctorPhoneNumber) {
        let AppointmentID="APID-"+Math.floor(Math.random() * 10000);

        //Returning parameters called inside Method
        return {AppointmentID, doctorName, doctorAge, doctorEmail, doctorPhoneNumber}
    }
    //Creating cancelAppointment Method with Appointment ID, which will cancel app.
    cancelAppointment(AppointmentId) {
        return{"message": "Registration has been cancelled"}
    }
}

//Creating Object which is part of Doctor class
const objDoctor = new Doctor();

//Calling Function through variable name result
let result = objDoctor.registerPatient("Shyam", 20, "shyamie123@gmail.com", "919-434-7918");
//let result2 = objDoctor.cancelRegistration("APID-3865")
objDoctor.greeting();
let result3 = objDoctor.registerDoctor("Meher", 29, "mehermc360@gmail.com", "990202020200");
//let result4 = objDoctor.cancelAppointment("APID-5248")


//Printing Result
console.log(result)
//console.log(result2)
console.log(result3)
//console.log(result4)