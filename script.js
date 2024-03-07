// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    var grid = document.getElementById("grid");
    var row = grid.insertRow(0);
    var cell = row.insertCell(0);
}

// Add a column
function addC() {
}

// Remove a row
function removeR() {
}

// Remove a column
function removeC() {
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
}

// Fill all cells
function fillAll(){
}

// Clear all cells
function clearAll(){
}