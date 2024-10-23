let divArray = []; /*Empty array to create the grid of divs based on the input value*/
let gridSide = 100;
let gridSize = gridSide*gridSide;
let paintColor = 0; /*Variable to change between pencil and eraser*/

/*Set initial flex value to fill the whole screen with the grid*/

document.documentElement.style.setProperty('--numberColumns', 'calc(100% / ' + gridSide + ')');

/*Loop to create the initial grid*/

const container = document.querySelector('.container');

for (let i = 0; i < gridSize; i++) {
    divArray[i] = document.createElement('div');
    divArray[i].classList.add("content");
    divArray[i].textContent = '';
    container.appendChild(divArray[i]);
}

/*Function to change div background color when hovering over it*/

const divBackground = document.querySelector('.container');

divBackground.addEventListener('mouseover', function(e) {
    const divSelection = e.target;
    if(paintColor == 0) {
        divSelection.style.backgroundColor = 'blue';
    }
    if(paintColor == 1) {
        divSelection.style.backgroundColor = 'white';
    }
});

/*Button to change grid size*/

const button1 = document.querySelector('.button-1');

button1.addEventListener('click', function() {

    /*Remove the old grid*/

    const elements = document.getElementsByClassName('content');
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }

    /*Ask for a new grid value*/

    gridSide = 1000;
    while(gridSide > 100) {
        let buttonInput1 = window.prompt('Type the size of your grid');
        gridSide = parseInt(buttonInput1);
        gridSize = gridSide*gridSide;
    }

    /* Set the flex value for the new grid */

    document.documentElement.style.setProperty('--numberColumns', 'calc(100% / ' + gridSide + ')');

    /*Create a new grid based on the value*/

    const container = document.querySelector('.container');
    divArray = [];
    for (let i = 0; i < gridSize; i++) {
        divArray[i] = document.createElement('div');
        divArray[i].classList.add("content");
        divArray[i].textContent = '';
        container.appendChild(divArray[i]);
    }
})

/*Button to alternate between pencil and eraser*/

const button2 = document.querySelector('.button-2');

button2.addEventListener('click', function() {
    if(paintColor == 0) {
        paintColor = 1;
        return;
    }
    if(paintColor == 1) {
        paintColor = 0;
        return;
    }
})

