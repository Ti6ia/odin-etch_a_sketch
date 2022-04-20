/* creo elemento div e lo nomino square*/
//const square = document.createElement("div");
/** aggiungo la classe square al div square*/
//square.className = "square";
/** stampo per vedere se funziona */
//console.log(square);


/** creo la variabile che conterrà l'html che devo aggiungere per creare i blocchi (square) */
let squares = '<div class="square"></div>';
for(let i=0; i<64; i++){
    squares += '<div class="square"></div>';
}
console.log(squares);
/** inserisco l'html dentro il div "grid" */
document.querySelector(".grid").innerHTML = squares;

