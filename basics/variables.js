var number = 3; // collecting information through ear (variabe) and storing into brain (computer memory)
//3 is person, seat number is memory address, theater is memory, fandango is movie ticket app
//console.log(number); //printing the information through mouth (console.log)

//<<<<<<< Updated upstream
//Hospital: Patient information (Name, DOB, Gender, Weight)
//=======
//Hospital: Patient information (Name, DOB, Gender, Weight)

var name = 'Shyam'; //no need to use var, old syntax
console.log(typeof name);

// let city = 'Hyderabad';
// city = "Mumbai";
// console.log(city)

var global = 10;

function fun () {
    var local = 5;
    console.log(local);
    console.log(global);
}
fun();
console.log(global);
//>>>>>>> Stashed changes
