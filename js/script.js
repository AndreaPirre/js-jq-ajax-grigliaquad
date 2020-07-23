// Griglia 6x6, ad ogni click parte una
// richiesta AJAX che prende un
// numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo,
// se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro
// del quadrato

// lati della griglia
var lato = 6;
// celle interne create da lato * lato
var gridSize = lato * lato;

// creo la griglia di (lato x lato) celle
creazioneGriglia();



$('.cella').click(function() {

    var clicked = $(this);
    var num09 = 'https://flynn.boolean.careers/exercises/api/random/int';

    // chiamata AJAX
    $.ajax({

        url: num09,
        // sono io client che richiedo dei dati
        method: 'GET',
        // la chiamata è andata bene, utilizzo i dati ritornati
        success: function(data) {
            // mi salvo il valore ritornato dalla API
            var randomNumber = data.response;
            // chiamo una funzione che utilizza il dato in risposta ricevuto dalla API
            funCell(clicked, randomNumber);
        },
        // qui sotto ci arrivo se la API da' errore
        error: function(error) {
            alert("Errore dalla chiamata API");
        }
    }); // fine chiamata AJAX

});


// |||||||||||||||FUNZIONI|||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// per prima cosa devo crearmi le celle interne alla griglia

function creazioneGriglia() {

    var gridCell = '<span class="cella"></span>';


    for (var i = 0; i < gridSize; i++) {

        $('.container_griglia').append(gridCell);
    }
}


function funCell(clickedCell, randomNum) {


    $(clickedCell).html(randomNum);


    if (randomNum <= 5) {
        $(clickedCell).addClass('giallo').removeClass('verde');
    } else {
        $(clickedCell).addClass('verde').removeClass('giallo');
    }
}
