// When size is submitted by the user, call makeGrid()
const form = document.getElementById("sizePicker");

// Clears the grid and creates a new one once submit is clicked:
form.addEventListener("submit", function(e) {

    // Prevents the function from running automatically once the page loads:
    e.preventDefault(); 

    // Clears the table when SUBMIT is clicked if a table already exists:
    let table = document.querySelector("#pixelCanvas");
    if (table.hasChildNodes()) {
        while (table.firstChild) {
            table.removeChild(document.querySelector("tbody"));
        }
    }
    // Creates the grid:
    makeGrid();
    
    // Creates an event listener that checks each cell...
    let tableCells = table.querySelectorAll("td").forEach(cell => {
        cell.addEventListener("click", function(e) {
            colorCell();
        })
        // ...and will color the cell the current value of the color picker once clicked:
        function colorCell () {
            let color = document.querySelector("#colorPicker").value;
            cell.setAttribute('style', `background-color: ${color};`);
        }
    });
    
});

// Creates a grid based on the value of height and width (height and width variables won't apply changes if declared outside of the function)
function makeGrid() {
    
    let grid = document.querySelector("#pixelCanvas");
    let height = document.querySelector("#inputHeight").value; 
    let width = document.querySelector("#inputWidth").value;;
    
    for (let i = 0; i < height; i++) {
        let gridRow = grid.insertRow(i);
        for (let j = 0; j < width; j++) {
            let gridCell = gridRow.insertCell(j);
        }
    }
}


