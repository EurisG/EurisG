// IMPORT OUR DATA MODEL 
const Todos = require('./../models/todoModel')


exports.getIndex = (req, res) => {
    res.send('Index homepage hello')
};

// FIND ALL 
exports.getTodos = async (req, res) => {
    try{
        const todos = await Todos.find();
        res.status(200).json({
            status: 'success',
            results: todos.length,
            data: {
                todos,
            }
        })

    } catch (error) {
        res.status(500).json({
            status: "error",
            data: {
                error: error.message
            }
        })
    }
}

// CREATE NEW 
exports.createTodo = async (req, res) => {
    try {
        // CREATE NEW TODO 
        const newTodo = await Todos.create(req.body);

        // SEND RESPONSE 
        res.status(201).json({
            status: 'success',
            data: {
                newTodo,
            }
        });
    } catch {
        res.statusCode(500).json({
            status: 'error',
            error: error.message
        })
    }
};

// GET BY ID
exports.getOneTodo = async (req, res) => {
    try{

        const todo = await Todos.findById(req.params.id);

        res.status(200).json({
            status: 'success',
            data: {
                todo,
            }
        });
    } catch(error) {
        res.status(500).json({
            status: 'error',
            error: error.message,
        });
        
    }
};

exports.deleteTodo = async (req, res) => {
    try{

     await Todos.findByIdAndDelete(req.params.id);

        res.status(204).json({
            status: 'success',
            data: {}
        });
    } catch(error) {
        res.status(500).json({
            status: 'error',
            error: error.message,
        });
        
    }
};

exports.updateTodo = async (req, res) => {
    try{
        const updatedTodo = await Todos.findByIdAndUpdate(Req.params.id,
            req.body, { new: true });

        res.status(204).json({
            status: 'success',
            data: {}
        });
    } catch(error) {
        res.status(500).json({
            status: 'error',
            error: error.message,
        });
        
    }
}
