let express = require('express');
let app = express();
const PORT = 4001;
let bodyParser = require('body-parser');
const gameCollection = []; //contains objects {name: "game name", cost" $0.00}

//configures bodyParser for jQuery - required
app.use(bodyParser.urlencoded({extended:true})); 

//serve static files
//must be done before app.post!
app.use(express.static('server/public'));

//send back all the games
app.get('/game', (req, res) => {
    res.send(gameCollection);
})

//when we want to add a new game
//req.body is the object we sent (req.body == gameToAdd)
app.post('/game', (req, res) =>{
    console.log(req.body);
    let gameToAdd = req.body;
    gameCollection.push(gameToAdd); 
    console.log(gameCollection);
    res.sendStatus(200);
})

//spin up server
app.listen(PORT, () => {
    console.log('server is running on port:', PORT);
});