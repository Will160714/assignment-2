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
        if(colorSelected != ""){
            cell.style.backgroundColor = colorSelected;
        }
    }
    numRows++;
}

// Add a column
function addC() {
    if(numRows == 0){
        addR();
    }
    else{
        numCols++;
        var rows = document.getElementsByTagName("tr");
        for(var x = 0; x < numRows; x++){
            var row = rows[x];
            var col = row.insertCell(numCols);
            if(colorSelected != "")
                col.style.backgroundColor = colorSelected;
        }
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
    var cells = document.getElementsByTagName("td");
    for(var counter = 0; counter < cells.length; counter++){
        if(cells[counter].style.backgroundColor == ""){
            cells[counter].style.backgroundColor = colorSelected;
        }
    }
}

// Fill all cells
function fillAll(){
    var cells = document.getElementsByTagName("td");
    for(var counter = 0; counter < cells.length; counter++){
        cells[counter].style.backgroundColor = colorSelected;
    }
}

// Clear all cells
function clearAll(){
    var cells = document.getElementsByTagName("td");
    for(var counter = 0; counter < cells.length; counter++){
        cells[counter].style.backgroundColor = "";
    }
}