let containerDiv = document.querySelector(".container");

let generateGridButton = document.querySelector("#generateGridBtn");

function createEmptyDivs(numberOfDivs, target){
    for (let i = 0; i < numberOfDivs; i++){
        let squareDiv = document.createElement("div");
        squareDiv.classList.add("square");
        target.appendChild(squareDiv);
    }
}

// create 16 x 16 grid of squares

function createGrid(gridSize){
    for (let i = 0; i < gridSize; i++){
        // create new row div
        let newRowDiv = document.createElement("div");
        newRowDiv.classList.add("row");
        createEmptyDivs(gridSize, newRowDiv);
        containerDiv.appendChild(newRowDiv);
    }
}


containerDiv.addEventListener("mouseover", (event) => {
    if(event.target.classList.contains("square")){
        event.target.classList.add("fill");
    }
})

document.addEventListener("click", (event) => {
    if(event.target === generateGridButton){
        // prompt user for input
        gridSize = prompt("How many squares per side of grid?");
        // use input to create grid
        createGrid(gridSize);

    }
})