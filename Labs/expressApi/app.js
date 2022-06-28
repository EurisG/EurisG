// Import express 
const express = require('express');

const todoRouter = require('./routes/todoRoutes');

// CREATE VARIABLE TO HOLD OUR EXPRESS METHOD 
const app = express();

// TELL YOUR EXPRESS APP NOT TO ACCEPT NESTED DATA 
app.use(express.urlencoded({
    extended: false,
}))

// ADD A BODY PARSER 
app.use(express.json());

// ADD PATH TO STATIC FILE 
app.use(express.static('public'));

// SENDING USER TO THE TODO ROUTER 
app.use('/todos', todoRouter);


module.exports = app;