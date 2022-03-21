// Select color input
// let color = document.querySelector("#colorPicker").value;

// Select size input
// let height = document.querySelector("#inputHeight").value;
// let width = document.querySelector("#inputWidth").value;

// When size is submitted by the user, call makeGrid()
const form = document.getElementById("sizePicker");
// console.log("Form" + form.length);
// console.log(JSON.stringify(form));

form.addEventListener("submit", function(e) {

    e.preventDefault(); 

    let table = document.querySelector("#pixelCanvas");
    if (table.hasChildNodes()) {
        while (table.firstChild) {
            table.removeChild(document.querySelector("tbody"));
          }
    }
    makeGrid();
    
    let tableCells = table.querySelectorAll("td").forEach(cell => {
        cell.addEventListener("click", function(e) {
            colorCell();
        })
        function colorCell () {
            let color = document.querySelector("#colorPicker").value;
            cell.setAttribute('style', `background-color: ${color};`);
        }
    });
    
});

function makeGrid() {
// Your code goes here!
    let x = document.querySelector("#inputHeight").value;
    let y = document.querySelector("#inputWidth").value;
    
    let grid = document.querySelector("#pixelCanvas");
    
    for (let i = 0; i < x; i++) {
        let gridRow = grid.insertRow(i);
        for (let j = 0; j < y; j++) {
            let gridCell = gridRow.insertCell(j);
        }
    }
}


