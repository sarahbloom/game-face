$(document).ready(readyNow);

function readyNow(){
    console.log('document ready');
    $('#submitButton').on('click', submitGame);
    getAllGames();// get games when page loads
}

function getAllGames(){
    $.ajax({
        type: 'GET',
        url: '/game',
    }).done(function(response){
        appendToDom(response);//the response is the game collection array
    });
}

function appendToDom(gameCollection){
    $('#gameContent').empty();
    for (let game of gameCollection){
        console.log('game: ', game);
        let tr = $("<tr></tr>");
        tr.append('<td>' + game.name + '</td>' );
        tr.append('<td>' + game.cost + '</td>');
        $('#gameContent').append(tr);
    }
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
        //put the GET request in here to make sure the POST is done
        console.log('success!');  
        //refresh game list to get new game info.
        getAllGames();
    }).fail(function(response) {
        alert('something went wrong...');
    })
} 