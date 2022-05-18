const express = require('express');
const app = express();

const learnerRouter =  require('./route/learnerRoute');





// Create Middleware to handle our routes
app.use('/api/v1/learners', learnerRouter);




module.exports = app;

