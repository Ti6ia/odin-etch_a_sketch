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


/** COLORARE SQUARES (mk-2)*/
    /** vars */
const squares = document.querySelectorAll(".square");
const btnColor = document.querySelector(".btnColor");
const btnRainbow = document.querySelector(".btnRainbow");
const btnEpilector = document.querySelector(".btnEpilector");
let buttonSelected = "";
const r = document.querySelector(':root');

    /** functions */
const randColor = () =>  {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}
function epilectorColorSet(){
    const rs = getComputedStyle(r);
    r.style.setProperty('--epilectorColor', randColor());
    console.log(rs.getPropertyValue('--epilectorColor'))
}

    /** attiva bottone */
const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        /** resetto i tasti */
        buttons.forEach((button) => {
            button.classList.remove("inUse");
        });
        /** seleziono un tasto */
        buttonSelected = e.target.id;
        e.target.classList.add("inUse");     
    })
});
    /** funzione colora */
squares.forEach((square) => {
    square.addEventListener('mouseover', (e) => {
        if(e.buttons == 1){
            if(buttonSelected == "btnColor"){ e.target.classList.add("colored"); }
            if(buttonSelected == "btnEpilector"){ 
                epilectorColorSet();
                e.target.classList.add("epilector"); 
            }
        }
    })
    square.addEventListener('mousedown', (e) => {
        if(buttonSelected == "btnColor"){ e.target.classList.add("colored"); }
        if(buttonSelected == "btnEpilector"){ 
            epilectorColorSet();
            e.target.classList.add("epilector"); 
        }
    })
});


/** COLORE NORMALE 
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
*/

/** RAINBOW 
const btnRainbow = document.querySelector(".btnRainbow");
const r = document.querySelector(':root');

const randColor = () =>  {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}

function rainbowColorSet(){
    const rs = getComputedStyle(r);
    r.style.setProperty('--rainbowColor', randColor());
    console.log(rs.getPropertyValue('--rainbowColor'))
}

btnRainbow.addEventListener('click', rainbowColorSet);
*/




/** TASTO CLEAR */
const btnClear = document.querySelector(".btnClear");

function clear(){
    squares.forEach((item) => {item.classList.remove("colored");}); 
    squares.forEach((item) => {item.classList.remove("epilector");}); 
}

btnClear.addEventListener('click', clear);