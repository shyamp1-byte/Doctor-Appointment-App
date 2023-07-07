const data = require("./data.json");

//console.log(data);
//console.log(typeof(data)
function displayUsers() {
    for (let i = 0; i < data.users.length; i++) {
        let firstName = data.users[i].firstName;
        let ssn = data.users[i].ssn;
        let phone = data.users[i].phone;
        let result = {
            firstName,
            ssn,
            phone,
        };
        console.log(i + 1, ":", result);
    }
}
// displayUsers();

function searchUsers(firstName) {
    for (let i = 0; i < data.users.length; i++) {
        if (firstName === data.users[i].firstName) {
            console.log("Match Found in the", i + 1, "record");
            console.log(
                "Information in",
                i + 1,
                "record:" + JSON.stringify(data.users[i])
            );
        }
    }
}
// searchUsers("Macy");


function phonenumersearch(shortPhNumber) {
    let count = 0;
    for (let i = 0; i < data.users.length; i++) {
        if (data.users[i].phone.includes(shortPhNumber)) {
            count = count + 1;
            console.log(data.users[i].phone);
        }

    }
    console.log("the count with "+ shortPhNumber+ " series is :", count);
}

// phonenumersearch(8951);
