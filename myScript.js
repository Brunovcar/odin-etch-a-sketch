const container = document.querySelector(".container");
let divArray = [];
let gridSide = 16;
let gridSize = gridSide*gridSide;


for (let i = 0; i < gridSize; i++) {
    divArray[i] = document.createElement("div");
    divArray[i].classList.add("content");
    divArray[i].textContent = null;
    container.appendChild(divArray[i]);
}

