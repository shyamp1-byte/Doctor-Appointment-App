// Sample dataset
const dataset = [
    { name: "Shyam Pedibhotla", age: 20, country: "USA", illness: "Coughing", appointment_date: "6/11/2023"},
    { name: "Meher Chaitanya", age: 29, country: "India", illness: "Vommiting", appointment_date: "6/20/2023"},
    { name: "Dave Spitz", age: 40, country: "Australia", illness: "Headache", appointment_date: "6/21/2023"},
    { name: "Michael Johnson", age: 18, country: "Germany", illness: "Fever", appointment_date: "6/28/2023"},
    { name: "Jake Raft", age: 30, country: "Russia", illness: "Leg Pain", appointment_date: "7/1/2023"},
];

// Function to generate the table rows from the dataset
function generateTableRows() {
    const tableBody = document.getElementById("table-body");

    dataset.forEach(data => {
        const row = document.createElement("tr");
        const nameCell = document.createElement("td");
        const ageCell = document.createElement("td");
        const countryCell = document.createElement("td");
        const illnessCell = document.createElement("td");
        const appointment_dateCell = document.createElement("td");

        nameCell.textContent = data.name;
        ageCell.textContent = data.age;
        countryCell.textContent = data.country;
        illnessCell.textContent = data.illness;
        appointment_dateCell.textContent = data.appointment_date;

        row.appendChild(nameCell);
        row.appendChild(ageCell);
        row.appendChild(countryCell);
        row.appendChild(illnessCell);
        row.appendChild(appointment_dateCell);

        tableBody.appendChild(row);
    });
}

// Call the function to generate the table rows
generateTableRows();
