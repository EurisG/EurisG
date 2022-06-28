const express = require('express');

const todoController = require('./../controllers/todoController')

const  todoRouter = express.Router();


todoRouter
.route('/')
.get(todoController.getTodos)
.post(todoController.createTodo);

todoRouter
.route('/:id')
.get(todoController.getOneTodo)
.delete(todoController.deleteTodo)
.put(todoController.updateTodo)
// todoRouter.route('/').get(todoController.getIndex);
// EXPORT TODO ROUTER 
module.exports = todoRouter ;