/*jslint browser:true */

// Creates a grid based on the value of height and width (height and width variables won't apply changes if declared outside of the function)
function makeGrid() {

	"use strict";
	var grid = document.querySelector("#pixelCanvas"),
		height = document.querySelector("#inputHeight").value,
		width = document.querySelector("#inputWidth").value,
		i = 0,
		j = 0,
		gridRow;

	for (i = 0; i < height; i += 1) {
		gridRow = grid.insertRow(i);
		for (j = 0; j < width; j += 1) {
			gridRow.insertCell(j);
		}
	}
}

// When size is submitted by the user, call makeGrid()
// Clears the grid and creates a new one once submit is clicked:
document.getElementById("sizePicker").addEventListener("submit", function(e) {

	// Prevents the function from running automatically once the page loads:
	"use strict";
	e.preventDefault();

	// Clears the table when SUBMIT is clicked if a table already exists:
	var table = document.querySelector("#pixelCanvas");
	if (table.hasChildNodes()) {
		while (table.firstChild) {
			table.removeChild(document.querySelector("tbody"));
		}
	}
	// Creates the grid:
	makeGrid();

	// Selects and checks each cell...
	table.querySelectorAll("td").forEach(function(cell) {
		// ...and will color the cell the current value of the color picker once clicked:
		function colorCell() {
			var color = document.querySelector("#colorPicker").value;
			cell.setAttribute('style', 'background-color: ' + color + ';');
		}
		cell.addEventListener("click", function() {
			colorCell();
		});
	});
});