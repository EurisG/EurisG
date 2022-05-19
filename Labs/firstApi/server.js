// IMPORT MONGOOSE TO CONNECT TO DATABASE 
const mongoose = require('mongoose');

// IMPORT DOTENV IN ORDER TO CONNECT TO OUR DATABASE
const dotenv = require('dotenv');


// use dotenv to connect to our config file  
dotenv.config({
    path: "./config.env"
});

console.log(process.env);

// IMPORT EPRESS APP 
const app = require('./app')

const perscholasDB = mongoose.connect(process.env.DATABASE.replace("<password>", process.env.PASSWORD)).then(() => {
    console.log("DATABASE IS UP AND RUNNING..");
})

const port = 5000;

app.listen(port, () => {
    console.log(`Listening on PORT ${port}...`)
});