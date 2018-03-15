$(document).ready(readyNow);

function readyNow(){
    console.log('document ready');
    $('#submitButton').on('click', submitGame);
}

function submitGame(){
    let gameName = $('#gameName').val();
    let cost = $('#cost').val();
    let gameToAdd = {name: gameName, cost: cost};
    $.ajax({
        type: 'POST',
        data: gameToAdd,
        url: '/game',
    }).done(function(response) {
        //our response from POST is '200' success
        console.log('success!');  
    }).fail(function(response) {
        alert('something went wrong...');
    })
} 