let containerDiv = document.querySelector(".container");

function createEmptyDivs(numberOfDivs, target){
    for (let i = 0; i < numberOfDivs; i++){
        // create
        let div = document.createElement("div");
        target.appendChild(div);
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