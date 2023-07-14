// StudentInformation is CLASS / ROOM
// displayStudentInfo is METHOD-FUNCTION / PERSON
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
    // Constructor in-Built Method
    constructor(){
        console.log("I will run automatically , without calling me. Im constructor Function")
    }
    displayTutorInformation(){
        console.log("Im the Tutor inside the class");
    }
}



module.exports={
    StudentInformation,
    TutorInformation
}