const express = require('express')
const app = express()
require('dotenv').config()

// require Statements 
app.set('view engine', 'jsx');

// needed to be viewable
app.engine('jsx', require('express-react-views').createEngine());

const fruitData = require('./models/fruits')

app.get('/fruits', (req, res,) => {
    res.render('Index', {fruits: fruitData})
});

app.get('fruits/new', (req, res) => {
    res.render('New')
});

// add show route 
app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    res.render('Show', {fruit: fruitData[req.params.indexOfFruitsArray]});
});


app.listen(3000,() =>{
    console.log(`Listening on PORT ${process.env.PORT}`);
} )