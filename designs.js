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
    
//Attempt to apply event listener to html group - not working yet
    // let tableCells = table.getElementsByTagName("td");
    // console.log(tableCells);

    // tableCells.forEach(function cell() {
    //     cell.addEventListener("click", function(e) {
    //             colorCell();
    //     });
    // });

// This works, but only for the first cell due to querySelector being used. Using querySelectorAll returns an error
    let tableCells = table.querySelector("td");
    tableCells.addEventListener("click", function(e) {
        colorCell();
    });

    function colorCell () {
        let color = document.querySelector("#colorPicker").value;
        tableCells.setAttribute('style', `background-color: ${color};`);
    }
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


