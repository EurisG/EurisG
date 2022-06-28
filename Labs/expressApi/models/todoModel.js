// IMPORT MONGOOSE IN ORDER TO CREATE MODEL 
const mongoose = require('mongoose');

// CREATE SCHEMA 
const todoSchema = new mongoose.Schema({
    description: {
        type: String,
    },
    complete: {
        type: Boolean,
    }
});

const Todos = mongoose.model('Todo', todoSchema);

// EXPORT MODEL 
module.exports = Todos;