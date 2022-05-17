const express = require('express')
const app = express()
require('dotenv').config()

// require Statements 
app.set('view engine', 'jsx');

// needed to be viewable
app.engine('jsx', require('express-react-views').createEngine());

const fruitData = require('./models/fruits')

app.get('/fruits', (req, res,) => {
    res.send(fruits);
});

// add show route 
app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    res.render('Show', {fruit: fruitData[req.params.indexOfFruitsArray]});
});


app.listen(3000,() =>{
    console.log(`Listening on PORT ${process.env.PORT}`);
} )