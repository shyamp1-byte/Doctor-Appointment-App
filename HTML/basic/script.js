// Sample dataset
const dataset = [
    { name: "John Doe", age: 25, country: "USA" },
    { name: "Jane Smith", age: 30, country: "Canada" },
    { name: "Mark Johnson", age: 28, country: "Australia" },
    { name: "Mark Johnson", age: 28, country: "Australia" },

     { name: "Mark Johnson", age: 28, country: "Australia" },
     { name: "Mark Johnson", age: 28, country: "Australia" },
     { name: "Mark Johnson", age: 28, country: "Australia" },
     { name: "Mark Johnson", age: 28, country: "Australia" },
     { name: "Mark Johnson", age: 28, country: "Australia" },
     { name: "Mark Johnson", age: 28, country: "Australia" },
     { name: "Mark Johnson", age: 28, country: "Australia" },
     { name: "Mark Johnson", age: 28, country: "Australia" },
     { name: "Mark Johnson", age: 28, country: "Australia" },
     { name: "Mark Johnson", age: 28, country: "Australia" },
     { name: "Mark Johnson", age: 28, country: "Australia" },
     { name: "Mark Johnson", age: 28, country: "Australia" },
     { name: "Mark Johnson", age: 28, country: "Australia" },
     { name: "Mark Johnson", age: 28, country: "Australia" },
     { name: "Mark Johnson", age: 28, country: "Australia" },
     { name: "Mark Johnson", age: 28, country: "Australia" },
     { name: "Mark Johnson", age: 28, country: "Australia" },
     { name: "Mark Johnson", age: 28, country: "Australia" },
     { name: "Mark Johnson", age: 28, country: "Australia" },
     
    // Add more data objects as desired
];

// Function to generate the table rows from the dataset
function generateTableRows() {
    const tableBody = document.getElementById("table-body");

    dataset.forEach(data => {
        const row = document.createElement("tr");
        const nameCell = document.createElement("td");
        const ageCell = document.createElement("td");
        const countryCell = document.createElement("td");

        nameCell.textContent = data.name;
        ageCell.textContent = data.age;
        countryCell.textContent = data.country;

        row.appendChild(nameCell);
        row.appendChild(ageCell);
        row.appendChild(countryCell);

        tableBody.appendChild(row);
    });
}

// Call the function to generate the table rows
generateTableRows();
