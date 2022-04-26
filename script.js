/** VARIABILI */
const r = document.querySelector(':root');
const rs = getComputedStyle(r);


/*CREO LA GRIGLIA*/
let htmlString = '';
let gridSize = 32;

function createGrid(gridSize){
    htmlString = '';
    for(let i=0; i<gridSize; i++){
        htmlString += '<div class="row">';
        for(let j=0; j<gridSize; j++){
            htmlString += '<div class="square"></div>';
        }
        htmlString += '</div>';
    }
    document.querySelector(".grid").innerHTML = htmlString;
}

createGrid(gridSize);

/*
const txtGridSize = document.getElementById("gridSize");
txtGridSize.addEventListener('input', (e) => {
    gridSize = e.target.value;
    createGrid(gridSize);
});
*/



/** colorpicker */

const btnPenColor = document.getElementById("btnPenColor");
let penColor = '#000000';
btnPenColor.addEventListener('input', (e) => {
    penColor = e.target.value;
    console.log(penColor);
});

let btnGridColor = document.getElementById("btnGridColor");
btnGridColor.addEventListener('input', (e) => {
    r.style.setProperty('--gridColor', e.target.value);
    console.log(rs.getPropertyValue('--gridColor'));
});


/** COLORARE SQUARES */
    /** vars */
const squares = document.querySelectorAll(".square");
const buttons = document.querySelectorAll(".button");
const btnColor = document.querySelector(".btnColor");
const btnRainbow = document.querySelector(".btnRainbow");
const btnEpilector = document.querySelector(".btnEpilector");
let buttonSelected = "";

    /** functions */
const randColor = () =>  {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}
function epilectorColorSet(){  
    r.style.setProperty('--epilectorColor', randColor());
    console.log(rs.getPropertyValue('--epilectorColor'));
}

    /** attiva bottone */
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
            if(buttonSelected == "btnColor"){ e.target.style.background = penColor; }
            if(buttonSelected == "btnRainbow"){ e.target.style.background = randColor(); }
            if(buttonSelected == "btnEpilector"){ 
                epilectorColorSet();
                e.target.classList.add("epilector"); 
            }
            console.log(e.target.style.background);
        }
    })
    square.addEventListener('mousedown', (e) => {
        if(buttonSelected == "btnColor"){ e.target.style.background = penColor;}
        if(buttonSelected == "btnRainbow"){ e.target.style.background = randColor(); }
        if(buttonSelected == "btnEpilector"){ 
            epilectorColorSet();
            e.target.classList.add("epilector"); 
        }
    })
});


/** TASTO CLEAR */
const btnClear = document.querySelector(".btnClear");

function clear(){
    squares.forEach((item) => {item.classList.remove("colored");}); 
    squares.forEach((item) => {item.classList.remove("epilector");}); 
    squares.forEach((item) => {item.style.background = rs.getPropertyValue('--gridColor')}); 
}

btnClear.addEventListener('click', clear);