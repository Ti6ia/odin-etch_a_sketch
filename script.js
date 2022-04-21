/** creo la variabile che conterrà l'html che devo aggiungere per creare i blocchi (square) */
let htmlString = '';
/** il ciclo che permette la creazione dell'html per la griglia */
for(let i=0; i<8; i++){
    htmlString += '<div class="row">';
    for(let j=0; j<8; j++){
        htmlString += '<div class="square"></div>';
    }
    htmlString += '</div>';
}
/** inserisco l'html dentro il div "grid" */
document.querySelector(".grid").innerHTML = htmlString;


/** creo l'array di squares */
const squares = document.querySelectorAll(".square");
/** aggiungo un listener in ogni square che modifica il colore dello sfondo
 *  solo quando il mouse è premuto */
squares.forEach((square) => {
    square.addEventListener('mouseover', (e) => {
        if(e.buttons == 1){
            e.target.classList.add("colored");
        }  
    })
});

/** mi prendo il div bottone */
const bottone = document.querySelector(".bottone");
console.log(bottone);
/** funzione per far tornare gli square bianchi */
function clear(){
    //squares.forEach((item) => {console.log(item);});
    squares.forEach((item) => {item.classList.remove("colored");});   
}
/** aggiungo l'eventListener per togliere la classe */
bottone.addEventListener('click', clear);

