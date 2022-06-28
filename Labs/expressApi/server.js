// IMPORT DOTENV MODULE TO CONNECT TO OUR CONFIG FILE 
const dotenv = require('dotenv');

const mongoose = require('mongoose');
// CONNECT TO OUR dotenv.config.ENV FILE 
dotenv.config({
    path: './config.env',
});

// console.log(process.env)

// CREATE OUT VARIABLE THAT REPRESENT OUR DATABASE 
const DB = mongoose.connect(process.env.DATABASE.replace("<password>", process.env.PASSWORD), {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }
)

.then(() => {
    console.log('DATABASE IS UP AND RUNNING..')
})
.catch((error) => {
    console.log(error.message);
})
// IMPORT OUR EXPRESS 
const app = require('./app');


// CREATE PORT 
// const port = 3000;
const PORT = process.env.PORT;

app.listen( PORT, () => {
 console.log(`Server started on port ${process.env.PORT}`);
});
