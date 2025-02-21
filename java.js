//freelancers
const freelancers = [
  { name: "Alice", occupation: "Writer", price: "$30" },
  { name: "Bob", occupation: "Teacher", price: "$50" },
  { name: "Carol", occupation: "Programmer", price: "$70" },
];
//func to make the table
function createFreelancerTable() {
  const container = document.getElementById("freelancerTable");


//table element
const table = document.createElement("table");

//table header
const headerRow = document.createElement("tr");
const headers = ["Name", "Occupation", "Starting Price"];

headers.forEach(text => {
    let th = document.createElement("th");
    th.textContent = text;
    headerRow.appendChild(th);
});
table.appendChild(headerRow);

freelancers.forEach(freelancer => {
    let row = document.createElement("tr");

    Object.values(freelancer).forEach(text =>
    {
        let td = document.createElement("td");
        td.textContent = text;
        row.appendChild(td);
    });
    table.appendChild(row);
});
container.appendChild(table);
}


createFreelancerTable();

//idk why I can't get this to load :'( 



