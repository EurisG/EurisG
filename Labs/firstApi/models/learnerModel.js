const mongoose = require('mongoose');

const learnerSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
    },
    age: {
        type: Number,
    },
    courses: {
        type: [String],
    },
});

const Learner = mongoose.model("Learner", learnerSchema);


// EXPORT OUR LEARNER MODEL TO OTHER APPLICATIONS 
module.exports = Learner;