const express = require('express');
const pokemon = require('./models/pokemon');
// const Index = require('./views');
const app = express()

app.set("view engine" , "jsx");

app.engine("jsx", require("express-react-views").createEngine());



app.get('', (req, res) => {
    res.send('Welcome to the Pokemon App!')
});

app.get('/pokemon', (req, res) => {
    res.render("index", {pokemon})
});

app.get('/pokemon/:id', (req, res) => {
    res.send(req.params.id)
})

app.listen(3000, () => {
    console.log('Listening to PORT 3000')
})