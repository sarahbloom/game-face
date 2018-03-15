let express = require('express');
let app = express();
const PORT = 4001;
let bodyParser = require('body-parser');
const gameCollection = [];

//configures bodyParser for jQuery - required
app.use(bodyParser.urlencoded({extended:true})); 

//serve static files
app.use(express.static('server/public'));

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