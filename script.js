// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    var grid = document.getElementById("grid");
    var row = grid.insertRow(numRows);
    for(var counter = 0; counter <= numCols; counter++){
        var cell = row.insertCell(counter);
        cell.innerHTML = numRows;
    }
    numRows++;
    console.log(numRows);
}

// Add a column
function addC() {
    numCols++;
    var rows = document.getElementsByTagName("tr");
    for(var x = 0; x < numRows; x++){
        var row = rows[x];
        var col = row.insertCell(numCols);
        col.innerHTML = numCols;
    }
}

// Remove a row
function removeR() {
    if(numRows >= 1){
        var grid = document.getElementById("grid");
        grid.deleteRow(numRows - 1);
        numRows--;
    }
    else{
        console.log("No rows to delete");
    }
}

// Remove a column
function removeC() {
    if(numCols >= 0){
        var rows = document.getElementsByTagName("tr");
        for(var counter = 0; counter < numRows; counter++){
            var row = rows[counter];
            row.deleteCell(numCols);
        }
        numCols--;
    }
    else{
        console.log("No columns to delete");
    }
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