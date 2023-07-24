// Program to loop through an object

let student = {
    name: "Shyam",
    age: 20,
    dob: 2003
}

for (let key in student) {
    let value;

    value = student[key]
    console.log(key + "-" + value);
}