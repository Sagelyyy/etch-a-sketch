const container = document.querySelector('#container');
const bgColor = 'white';
const hoverColor = 'gainsboro';
const fillColor = 'black'

const flexColLeft = document.createElement('div');
flexColLeft.style.float = 'left';
flexColLeft.style.display = "inline-block"
flexColLeft.style.width = '32%';
flexColLeft.style.height = '100%';

const flexBoxContainer = document.createElement('div');
flexBoxContainer.classList.add('flexContainer');
flexBoxContainer.style.display = ('flex');
flexBoxContainer.style.justifyContent  = ('center');
flexBoxContainer.style.flexWrap = 'wrap';
flexBoxContainer.style.marginLeft = '25%'
flexBoxContainer.style.width = '955px';
//flexBoxContainer.style.height = '100px';
container.appendChild(flexColLeft)
container.appendChild(flexBoxContainer);

//here we are creating all the items(grid sqaures) we need and placing 
//them in the flex-box container with the class of gridCell
for (i = 0; i < 256; i++){
    const flexItem = document.createElement('div');
    flexItem.classList.add('gridCell')
    flexItem.style.cursor = 'pointer';
    flexItem.style.width = '55px';
    flexItem.style.height = '55px';
    flexItem.style.backgroundColor = bgColor
    flexItem.style.border = '2px solid black';
    flexBoxContainer.appendChild(flexItem);
}

//we are looping through all the gridCell's and adding the mouseenter
//event to change their color!
let gridSquares = document.getElementsByClassName('gridCell');
for (i = 0; i < gridSquares.length; i++){



    gridSquares[i].addEventListener("mouseenter", mouseEnter)

    function mouseEnter(event){
        event.target.style.backgroundColor = hoverColor
    }


   gridSquares[i].addEventListener('mouseleave', handleEvent)

    function handleEvent(event) {
        event.target.style.backgroundColor = bgColor
    }

    gridSquares[i].addEventListener('click', function (fillCell) {
        fillCell.target.style.backgroundColor = fillColor
        fillCell.target.className = 'gridFilled'
        fillCell.target.removeEventListener('mouseleave', handleEvent)
        fillCell.target.removeEventListener('mouseenter', mouseEnter)
    })

}
