// Select color input
const color = document.querySelector("#colorPicker").value;

// Select size input
const height = document.querySelector("#inputHeight").value;
const width = document.querySelector("#inputWidth").value;

// When size is submitted by the user, call makeGrid()
const form = document.getElementById("sizePicker");
// console.log("Form" + form.length);
// console.log(JSON.stringify(form));
form.addEventListener("submit", makeGrid(height, width));

function makeGrid(x, y) {

// Your code goes here!
    let grid = document.createElement("table");
    let oldtable = document.querySelector("#pixelCanvas");

    for (let i = 0; i < x; i++) {
        let gridRow = grid.insertRow(i);
        for (let j = 0; j < y; j++) {
            let gridCell = gridRow.insertCell(j);
        }
    }

    oldtable.replaceWith(grid);
}
