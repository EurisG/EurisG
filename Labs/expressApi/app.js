// Import express 
const express = require('express');

const todoRouter = require('./routes/todoRoutes');

// CREATE VARIABLE TO HOLD OUR EXPRESS METHOD 
const app = express();

// app.get('/', getIndex);

// SENDING USER TO THE TODO ROUTER 
app.use('/todos', todoRouter);

// // CREATE PORT 
// const port = 3000;

// app.listen( port, () => {
//  console.log(`Server started on port ${port}`);
// })
module.exports = app;