const data = [
  {
    name: "Name",
    age: "Age",
    contact: "Contact",
  },

  {
    name: "ketan",
    age: 20,
    contact: 8037122052,
  },
  {
    name: "nipun",
    age: 21,
    contact: 8077452052,
  },
  {
    name: "kunal",
    age: 22,
    contact: 8071222052,
  },
];

const table = window.document.getElementById("table");

// head
var tableHead = document.createElement("div");
tableHead.className = "head";
for (var headData in data[0]) {
  var cell = document.createElement("div");
  cell.className = "data-row";
  cell.textContent = data[0][headData];
  tableHead.appendChild(cell);
}

table.appendChild(tableHead);

// rows

for (let i = 1; i < data.length; i++) {
  let row = document.createElement("div");
  row.className = "row";
  for (var rowData in data[0]) {
    var cell = document.createElement("div");
    cell.className = "data-row";
    cell.textContent = data[i][rowData];
    row.appendChild(cell);
  }

  table.appendChild(row);
}

console.log(data);
