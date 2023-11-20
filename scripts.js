let containerDiv = document.querySelector(".container");

function createEmptyDivs(numberOfDivs, target){
    for (let i = 0; i < numberOfDivs; i++){
        let squareDiv = document.createElement("div");
        squareDiv.classList.add("square");
        target.appendChild(squareDiv);
    }
}

// create 16 x 16 grid of squares
for (let i = 0; i < 16; i++){
    // create new row div
    let newRowDiv = document.createElement("div");
    newRowDiv.classList.add("row");
    createEmptyDivs(16, newRowDiv);
    containerDiv.appendChild(newRowDiv);
}

containerDiv.addEventListener("mouseover", (event) => {
    if(event.target.classList.contains("square")){
        event.target.classList.add("fill");
    }
})