// Griglia 6x6, ad ogni click parte una
// richiesta AJAX che prende un
// numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo,
// se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro
// del quadrato

var lato = 6; // lato griglia
var gridSize = lato * lato; // dimensione griglia, numero di celle di cui è composta

// creo la griglia di (side x side) celle
creazioneGriglia();

// |||||||||||||||FUNZIONI|||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// per prima cosa devo crearmi le celle interne alla griglia
// posso usare un ciclo for e una funzione

function creazioneGriglia() {

    var gridCell = '<span class="cella"></span>';


    for (var i = 0; i < gridSize; i++) {

        $('.container_griglia').append(gridCell);
    }
}
