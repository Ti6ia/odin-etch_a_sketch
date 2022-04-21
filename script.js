/*CREO LA GRIGLIA*/
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


/** COLORE NORMALE */
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


/** RAINBOW */
const btnRainbow = document.querySelector(".btnRainbow");
const r = document.querySelector(':root');
const randColor = () =>  {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}

function rainbowColorSet(){
    const rs = getComputedStyle(r);
    r.style.setProperty('--rainbowColor', '#7817d3');
    console.log(rs.getPropertyValue('--rainbowColor'))
}

btnRainbow.addEventListener('click', rainbowColorSet);


/** TASTO CLEAR */
const btnClear = document.querySelector(".btnClear");

function clear(){
    squares.forEach((item) => {item.classList.remove("colored");});   
}

btnClear.addEventListener('click', clear);

