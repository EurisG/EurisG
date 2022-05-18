const express = require('express');
// const pokemon = require('./models/pokemon');
// const Index = require('./views');
const app = express()

app.set("view engine" , "jsx");

app.engine("jsx", require("express-react-views").createEngine());

app.use(express.urlencoded({extended: false}));

app.use((req, res, next) => {
    console.log('I run all routes');
    next();
})

const pokeData = require('./models/pokemon')

app.get('', (req, res) => {
    res.send('Welcome to the Pokemon App!')
});

app.get('/pokemon', (req, res) => {
    res.render("index", {pokemon: pokeData})
});

// app.get('/pokemon/:id', (req, res) => {
//     res.send(req.params.id)
//     // res.render("Show", {pokemon: pokeData[req.params.indexOfFruitsArray]});
// });

app.get('/pokemon/:indexOfFruitsArray', (req, res) => {
    res.render("Show", {pokemon: pokeData[req.params.indexOfFruitsArray]});
});

app.listen(3000, () => {
    console.log('Listening to PORT 3000')
})