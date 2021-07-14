const container = document.querySelector('#container');
const bgColor = 'white';
let hoverColor = 'gray';
const fillColor = 'black'
let colorizeMode = false;

const gridWidth = '830px' 
const cellHeight = '45px'
const cellWidth = '45px'

document.body.style.backgroundColor = hoverColor

let rows = 0
let columns = 0
let area = 0


const resetButton = document.createElement('button');
resetButton.id = 'resetGrid';
resetButton.textContent = 'CHANGE SIZE';
resetButton.style.backgroundColor = 'teal';
resetButton.style.width = '100%';
resetButton.style.height = '3.5em';
resetButton.style.border = 'none';
resetButton.style.fontFamily = 'monospace'
resetButton.style.fontWeight = 'bold'
resetButton.style.fontSize = '30px'

const colorizeButton = document.createElement('button');
colorizeButton.id = 'colorize';
colorizeButton.textContent = 'COLORIZE';
colorizeButton.style.backgroundColor = 'pink';
colorizeButton.style.width = '26%';
colorizeButton.style.height = '2em';
colorizeButton.style.left = '1%'
colorizeButton.style.top = '150px'
//colorizeButton.style.border = 'none';
colorizeButton.style.fontFamily = 'monospace'
colorizeButton.style.fontWeight = 'bold'
colorizeButton.style.fontSize = '30px'
colorizeButton.style.position = 'absolute'
colorizeButton.style.boxShadow = "10px 10px 20px black"




const flexColLeft = document.createElement('div');
flexColLeft.style.display = "block";
flexColLeft.style.float = 'left';
flexColLeft.style.width = '32%';
flexColLeft.style.height = '100%';


container.appendChild(resetButton);
container.appendChild(flexColLeft);
container.appendChild(colorizeButton);

function createRows(gridRows){
    for(i = 0; i < gridRows; i++){
      const flexBoxContainer = document.createElement('div');
      flexBoxContainer.classList.add('flexContainer');
      flexBoxContainer.style.display = ('flex');
      flexBoxContainer.style.justifyContent  = ('center');
      flexBoxContainer.style.flexWrap = 'wrap';
      flexBoxContainer.style.marginLeft = '28%';
      flexBoxContainer.style.width = gridWidth;
      container.appendChild(flexBoxContainer);
    }
  }


  function createColumns(gridColumns){
    const flexBoxContainer = document.getElementsByClassName('flexContainer');
    for(i = 0; i < rows; i++){
      for(v = 0; v < columns; v++){
        const flexItem = document.createElement('div');
        flexItem.classList.add('gridCell');
        flexItem.style.cursor = 'pointer';
        flexItem.style.width = cellWidth;
        flexItem.style.height = cellHeight;
        flexItem.style.backgroundColor = bgColor;
        flexItem.style.border = '2px solid black';
        flexBoxContainer[i].appendChild(flexItem)
        }
    }
  }


document.getElementById('resetGrid').onclick = function getGridArea(){
    const newGridWidth = window.prompt('How many Columns? (16 max)')
    const newGridHeight = window.prompt('How many Rows? (16 max')
    if(newGridHeight <= 16 && newGridWidth <= 16){
        destroyGrid()
        createGrid(newGridHeight, newGridWidth)
        createClicks()
    }else{
        alert('Must be less than 16!')
    }
}

document.getElementById('colorize').onclick = function getGridArea(){
    if(colorizeMode == false){
        colorizeButton.innerText = 'COLORIZE OFF'
        colorizeMode = true;
    } else {
        colorizeButton.innerText = 'COLORIZE'
        colorizeMode = false
    }
}

function createGrid(r,c){
    rows = r
    columns = c
    area = rows * columns
    createRows(r);
    createColumns(c);
}



function destroyGrid(){
    const flexBoxContainer = document.getElementsByClassName('flexContainer');
    for(i = 0; i < flexBoxContainer.length; i++){
        while(flexBoxContainer[i].firstChild){
            flexBoxContainer[i].removeChild(flexBoxContainer[i].firstChild)
        }
    }
}


// we have to seperate the functions for the event listeners so when we
// later remove the listeners we dont have a scope problem

function handleEvent(event) {
    event.target.style.backgroundColor = bgColor
}

function colorizeCell(){
    let randR = Math.floor(Math.random * 257)
    let randG = Math.floor(Math.random * 257)
    let randB = Math.floor(Math.random * 257)
}

function mouseEnter(event){
    if(colorizeMode == false){
        hoverColor = 'gray';
        event.target.style.backgroundColor = hoverColor
        document.body.style.backgroundColor = hoverColor
    } else{
        let randR = Math.floor(Math.random() * 257)
        let randG = Math.floor(Math.random() * 257)
        let randB = Math.floor(Math.random() * 257)
        hoverColor = `rgb(${randR}, ${randG}, ${randB})`
        event.target.style.backgroundColor = hoverColor
        document.body.style.backgroundColor = hoverColor
    }
}

//we are looping through all the gridCell's adding mouseover, mouseleave,
//and click events to change the color of the cell

function createClicks(){
    let gridSquares = document.getElementsByClassName('gridCell');
    for (i = 0; i < gridSquares.length; i++){

        gridSquares[i].addEventListener("mouseenter", mouseEnter)

        //gridSquares[i].addEventListener('mouseleave', handleEvent)

        gridSquares[i].addEventListener('click', function (fillCell) {
            fillCell.target.style.backgroundColor = fillColor
            fillCell.target.className = 'gridFilled'
            fillCell.target.removeEventListener('mouseleave', handleEvent)
            fillCell.target.removeEventListener('mouseenter', mouseEnter)
        })

    }
}


createGrid(16, 16)
createClicks()