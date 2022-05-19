const express = require('express');
const app = express();

const learnerRouter =  require('./route/learnerRoute');

app.use(express.json());



// Create Middleware to handle our routes
app.use('/api/v1/learners', learnerRouter);




module.exports = app;

