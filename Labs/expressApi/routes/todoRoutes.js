const express = require('express');

const todoController = require('./../controllers/todoController')

const  todoRouter = express.Router();


todoRouter.route('/').get(todoController.getIndex)

todoRouter.route('/').get(todoController.getIndex);
// EXPORT TODO ROUTER 
module.exports = todoRouter ;