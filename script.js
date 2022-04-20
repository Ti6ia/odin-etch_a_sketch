/** creo la variabile che conterrà l'html che devo aggiungere per creare i blocchi (square) */
let htmlString = '';
/** il ciclo che permette la creazione dell'html per la griglia */
for(let i=0; i<64; i++){
    htmlString += '<div class="row">';
    for(let j=0; j<64; j++){
        htmlString += '<div class="square"></div>';
    }
    htmlString += '</div>';
}
/** inserisco l'html dentro il div "grid" */
document.querySelector(".grid").innerHTML = htmlString;


/** creo l'array di squares */
const squares = document.querySelectorAll(".square");

squares.forEach((square) => {
    square.addEventListener('click', (e) => {
        e.target.style.background = 'red';
    })
});
