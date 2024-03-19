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
    for(let counter = 0; counter <= numCols; counter++){
        let cell = row.insertCell(counter);

        //Changes the color of the cell when clicked
        cell.addEventListener("click", function(){
            cell.style.backgroundColor = colorSelected;
        });
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
        for(let x = 0; x < numRows; x++){
            let row = rows[x];
            let col = row.insertCell(numCols);

            //Changes the color of the cell when clicked
            col.addEventListener("click", function(){
                col.style.backgroundColor = colorSelected;
            });
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

    //Reset numCols and numRows to 0 if the entire table/grid is cleared
    if(numRows <= 0){
        numCols = 0;
        numRows = 0;
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

    //Reset numCols and numRows to 0 if the entire table/grid is cleared
    if(numCols <= -1){
        numCols = 0;
        numRows = 0;
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