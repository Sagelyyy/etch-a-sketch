const container = document.querySelector('#container');

const flexColLeft = document.createElement('div');
flexColLeft.style.float = 'left';
flexColLeft.style.display = "inline-block"
flexColLeft.style.width = '32%';
flexColLeft.style.height = '100%';
flexColLeft.style.backgroundColor = 'red';



const flexBoxContainer = document.createElement('div');
flexBoxContainer.classList.add('flexContainer');
flexBoxContainer.style.display = ('flex');
flexBoxContainer.style.justifyContent  = ('center');
flexBoxContainer.style.flexWrap = 'wrap';
flexBoxContainer.style.marginLeft = '25%'
flexBoxContainer.style.width = '955px';
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
    flexItem.style.backgroundColor = 'blue'
    flexItem.style.border = '2px solid black';
    flexBoxContainer.appendChild(flexItem);
}

//we are looping through all the gridCell's and adding the mouseenter
//event to change their color!
let gridSquares = document.getElementsByClassName('gridCell');
for (i = 0; i < gridSquares.length; i++){
    gridSquares[i].addEventListener("mouseenter", function(e){
        e.target.style.backgroundColor = "pink";

          // reset the color after a short delay
        setTimeout(function() {
            e.target.style.backgroundColor = "blue";
        }, 500);
    }, false);
        
}
