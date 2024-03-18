// Declare global variables
let numRows = 0; //Total # of Rows in the Table
let numCols = 0; //Total # of Columns in the Table
let colorSelected; 

// Add a row
function addR() {
    //Find element with Id of "grid"
    var grid = document.getElementById("grid");

    //Insert a row to grid (from right to left)
    var row = grid.insertRow(numRows);

    //Insert the appropiate number of cells per row
    for(var counter = 0; counter <= numCols; counter++){
        var cell = row.insertCell(counter);

        //If color was selected, set that cell's background color to that color
        if(colorSelected != ""){
            cell.style.backgroundColor = colorSelected;
        }
    }
    //Increment to keep track of where the next row should be added
    numRows++;
}

// Add a column
function addC() {
    //If there are no rows, insert a row (same thing as inserting a cell)
    if(numRows == 0){
        addR();
    }

    //Else insert a column to all the rows of the table
    else{
        //Increment to keep track of where the next column should be added
        numCols++;

        //Getting an array of elements that represents the rows of the table
        var rows = document.getElementsByTagName("tr");

        //Inserting an additional cell/column to each row
        for(var x = 0; x < numRows; x++){
            var row = rows[x];
            var col = row.insertCell(numCols);

            //If a color was selected, set the column/cell background color to that color
            if(colorSelected != "")
                col.style.backgroundColor = colorSelected;
        }
    }
}

// Remove a row
function removeR() {
    //If there are rows to remove
    if(numRows >= 1){
        //Getting element with id of "grid"
        var grid = document.getElementById("grid");

        //Deleting the most bottom row
        grid.deleteRow(numRows - 1);

        //Decrementing the numRows as it represents the total # of rows
        numRows--;
    }

    //Else notify user that there are no rows to delete
    else{
        console.log("No rows to delete");
    }
}

// Remove a column
function removeC() {
    //If there are columns to remove
    if(numCols >= 0){
        //Get an array of elements that represents the rows of the table
        var rows = document.getElementsByTagName("tr");

        //Delete a cell/column from every row
        for(var counter = 0; counter < numRows; counter++){
            var row = rows[counter];
            row.deleteCell(numCols);
        }

        //Decrement numCols since it represents the total # of columns
        numCols--;
    }

    //Else notify user that there are no columns to delete
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
    //Get an array of elements that represents all cells within the table
    var cells = document.getElementsByTagName("td");

    //Setting the color of the cells to colorSelected if they do not have a background color
    for(var counter = 0; counter < cells.length; counter++){
        if(cells[counter].style.backgroundColor == ""){
            cells[counter].style.backgroundColor = colorSelected;
        }
    }
}

// Fill all cells
function fillAll(){
    //Get an array of elements that represents all cells within the table
    var cells = document.getElementsByTagName("td");

    //Setting the color of the cells to colorSelected 
    for(var counter = 0; counter < cells.length; counter++){
        cells[counter].style.backgroundColor = colorSelected;
    }
}

// Clear all cells
function clearAll(){
    //Get an array of elements that represents all cells within the table
    var cells = document.getElementsByTagName("td");

    //Setting the color of the cells back to default using "", which is white in the css file 
    for(var counter = 0; counter < cells.length; counter++){
        cells[counter].style.backgroundColor = "";
    }
}