/*CREO LA GRIGLIA*/
let htmlString = '';
const gridSize = 32;

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
const buttons = document.querySelectorAll(".button");
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
            if(buttonSelected == "btnRainbow"){ e.target.style.background = randColor(); }
            if(buttonSelected == "btnEpilector"){ 
                epilectorColorSet();
                e.target.classList.add("epilector"); 
            }
            console.log(e.target.style.background);
        }
    })
    square.addEventListener('mousedown', (e) => {
        if(buttonSelected == "btnColor"){ e.target.classList.add("colored"); }
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
    squares.forEach((item) => {item.style.background = "#ffffff"}); 
}

btnClear.addEventListener('click', clear);