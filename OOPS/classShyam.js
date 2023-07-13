// StudentInformation is CLASS / ROOM
// displayStudentInfo is METHOD / PERSON
// METHOD should be inside of the class (AS per OOPS)

class StudentInformation {

    displayStudentInfo() {
        console.log("im the student inside of the class");
    }
    greeting(name){
        console.log(name+" Good Morning...!");
    }

}

class TutorInformation{
    displayTutorInformation(){
        console.log("Im the Tutor inside the class");
    }
}

// NEED TO CREATE AN OBJECT
// objStudentInformation is OBJECT OF THE ABOVE CLASS
const objStudentInformation=new StudentInformation(); // Creating the object
objStudentInformation.displayStudentInfo();  // Calling Function
objStudentInformation.greeting("Shyam");  // Calling Function

const objTutorInformation=new TutorInformation(); // Creating the object
objTutorInformation.displayTutorInformation(); // Calling the function
