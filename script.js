/* creo elemento div e lo nomino square*/
//const square = document.createElement("div");
/** aggiungo la classe square al div square*/
//square.className = "square";
/** stampo per vedere se funziona */
//console.log(square);


/** creo la variabile che conterrà l'html che devo aggiungere per creare i blocchi (square) */
let squares = '';
for(let i=0; i<50; i++){
    squares += '<div class="row">';
    for(let j=0; j<50; j++){
        squares += '<div class="square"></div>';
    }
    squares += '</div>';
}
console.log(squares);
/** inserisco l'html dentro il div "grid" */
document.querySelector(".grid").innerHTML = squares;

