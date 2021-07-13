const container = document.querySelector('#container');
const bgColor = 'white';
const hoverColor = 'gainsboro';
const fillColor = 'black'

const gridWidth = '830px' 
const cellHeight = '45px'
const cellWidth = '45px'

const flexColLeft = document.createElement('div');
flexColLeft.style.display = "block"
flexColLeft.style.float = 'left';
flexColLeft.style.width = '32%';
flexColLeft.style.height = '100%';

const flexBoxContainer = document.createElement('div');
flexBoxContainer.classList.add('flexContainer');
flexBoxContainer.style.display = ('flex');
flexBoxContainer.style.justifyContent  = ('center');
flexBoxContainer.style.flexWrap = 'wrap';
flexBoxContainer.style.marginLeft = '25%'
flexBoxContainer.style.width = gridWidth;
container.appendChild(flexColLeft);
container.appendChild(flexBoxContainer);





//here we are creating all the items(grid sqaures) we need and placing 
//them in the flex-box container with the class of gridCell
function createGrid(){
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



function destroyGrid(){
    const flexCell = document.getElementsByClassName('gridCell')
    const flexCellFilled = document.getElementsByClassName('gridFilled')
    for (i = 0; i < flexCell.length; i++){
        flexCellFilled.className = 'gridCell'
        flexCellFilled[i].style.backgroundColor = bgColor
        flexCellFilled[i].addEventListener("mouseenter", mouseEnter)
        flexCellFilled[i].addEventListener('mouseleave', handleEvent)
    }
}
createGrid()

// we have to seperate the functions for the event listeners so when we
// later remove the listeners we dont have a scope problem

function handleEvent(event) {
    event.target.style.backgroundColor = bgColor
}


function mouseEnter(event){
    event.target.style.backgroundColor = hoverColor
}

//we are looping through all the gridCell's and adding the mouseenter
//event to change their color!
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
