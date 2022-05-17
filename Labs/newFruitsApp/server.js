const express = require('express');
const fruits = require('./models/fruits');
const app = express()
require('dotenv').config()

// require Statements 
app.set('view engine', 'jsx');

// needed to be viewable
app.engine('jsx', require('express-react-views').createEngine());

// helps get information for POST request 
app.use(express.urlencoded({extended:false}));

app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
})

const fruitData = require('./models/fruits')

app.get('/fruits', (req, res,) => {
    res.render('Index', {fruits: fruitData})
});

app.get('/fruits/new', (req, res) => {
    res.render('New');
});


// add show route 
app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    res.render('Show', {fruit: fruitData[req.params.indexOfFruitsArray]});
});

// post request 
app.post('/fruits', (req, res) => {
    if(req.body.readyToEat === 'on'){ 
        req.body.readyToEat = true; 
    } else { 
        req.body.readyToEat = false; 
    }
    fruits.push(req.body)
    console.log(fruitData)
    res.redirect('fruits');
})

app.listen(3000,() =>{
    console.log(`Listening on PORT ${process.env.PORT}`);
} )