const container = document.querySelector('#container');
const bgColor = 'white';
const hoverColor = 'gainsboro';
const fillColor = 'black'

const gridWidth = '830px' 
const cellHeight = '45px'
const cellWidth = '45px'

const resetButton = document.createElement('button')
resetButton.id = 'resetGrid'
resetButton.textContent = 'Reset (PH)'


const flexColLeft = document.createElement('div');
flexColLeft.style.display = "block"
flexColLeft.style.float = 'left';
flexColLeft.style.width = '32%';
flexColLeft.style.height = '100%';


const flexBoxContainer = document.createElement('div');
function createContainer() {
    flexBoxContainer.classList.add('flexContainer');
    flexBoxContainer.style.display = ('flex');
    flexBoxContainer.style.justifyContent  = ('center');
    flexBoxContainer.style.flexWrap = 'wrap';
    flexBoxContainer.style.marginLeft = '25%'
    flexBoxContainer.style.width = gridWidth;
    container.appendChild(flexBoxContainer);
}
container.appendChild(resetButton);
container.appendChild(flexColLeft);



const gridDimensions = []
let newArea = 0
document.getElementById('resetGrid').onclick = function getGridArea(){
    const newGridWidth = window.prompt('New Width?')
    const newGridHeight = window.prompt('New Height?')
    newArea = (newGridWidth * newGridHeight)
    destroyGrid()
    createGrid()
    createClicks()
}


//here we are creating all the items(grid sqaures) we need and placing 
//them in the flex-box container with the class of gridCell
function createGrid(){
    if (newArea){
        for (i = 0; i < newArea; i++){
            const flexItem = document.createElement('div');
            flexItem.classList.add('gridCell')
            flexItem.style.cursor = 'pointer';
            flexItem.style.width = cellWidth;
            flexItem.style.height = cellHeight;
            flexItem.style.backgroundColor = bgColor
            flexItem.style.border = '2px solid black';
            flexBoxContainer.appendChild(flexItem);
        }
    }else {
        for (i = 0; i < 256; i++){
            const flexItem = document.createElement('div');
            flexItem.classList.add('gridCell')
            flexItem.style.cursor = 'pointer';
            flexItem.style.width = cellWidth;
            flexItem.style.height = cellHeight;
            flexItem.style.backgroundColor = bgColor
            flexItem.style.border = '2px solid black';
            flexBoxContainer.appendChild(flexItem);
        }
    }
}



function destroyGrid(){
    while(flexBoxContainer.firstChild){
        flexBoxContainer.removeChild(flexBoxContainer.firstChild)
    }
}
createContainer()
createGrid()
createClicks()

// we have to seperate the functions for the event listeners so when we
// later remove the listeners we dont have a scope problem

function handleEvent(event) {
    event.target.style.backgroundColor = bgColor
}


function mouseEnter(event){
    event.target.style.backgroundColor = hoverColor
}

//we are looping through all the gridCell's adding mouseover, mouseleave,
//and click events to change the color of the cell

function createClicks(){
    let gridSquares = document.getElementsByClassName('gridCell');
    for (i = 0; i < gridSquares.length; i++){

        gridSquares[i].addEventListener("mouseenter", mouseEnter)

        gridSquares[i].addEventListener('mouseleave', handleEvent)

        gridSquares[i].addEventListener('click', function (fillCell) {
            fillCell.target.style.backgroundColor = fillColor
            fillCell.target.className = 'gridFilled'
            fillCell.target.removeEventListener('mouseleave', handleEvent)
            fillCell.target.removeEventListener('mouseenter', mouseEnter)
        })

    }
}