/*creo la griglia*/
let htmlString = '';
const gridSize = 64;

for(let i=0; i<gridSize; i++){
    htmlString += '<div class="row">';
    for(let j=0; j<gridSize; j++){
        htmlString += '<div class="square"></div>';
    }
    htmlString += '</div>';
}

document.querySelector(".grid").innerHTML = htmlString;


/** utente colora la griglia */
const squares = document.querySelectorAll(".square");

squares.forEach((square) => {
    square.addEventListener('mouseover', (e) => {
        if(e.buttons == 1){
            e.target.classList.add("colored");
        }  
    })
    square.addEventListener('mousedown', (e) => {
        e.target.classList.add("colored");
    });
});

/** tasto clear */
const bottone = document.querySelector(".bottone");

function clear(){
    squares.forEach((item) => {item.classList.remove("colored");});   
}

bottone.addEventListener('click', clear);

