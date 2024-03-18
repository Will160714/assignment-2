// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    var grid = document.getElementById("grid");
    var row = grid.insertRow(numRows);
    var cell = row.insertCell(0);
    // cell.innerHTML = numRows;
    numRows++;
}

// Add a column
function addC() {
    numCols++;
    var rows = document.getElementsByTagName("tr");
    for(var x = 0; x < numRows; x++){
        var row = rows[x];
        var col = row.insertCell(numCols);
        // col.innerHTML = numCols;
    }
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