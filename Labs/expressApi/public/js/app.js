// CREATE APP COMPONENT
class App extends React.Component {
    state = {
      todos: [],
    };
    // Add your lifecycle method here
    componentDidMount() {
      fetch("/todos")
        .then((response) => {
          return response.json();
        })
        .then((todos) => {
          this.setState({ todos: todos.data.todos });
        })
        .catch((error) => {
          console.error(error.message);
        });
    }

    // CREATE A DELETE TODO METHOD to delete todos
    deleteToDo = (id, index) => {
      // console.log(id, index)
      fetch(`todos/${id}`, {method: 'DELETE'})
      .then(() => { this.setState({
        todos: [
          // SLICE TO DETERMINE WHICH INDEX WAS CHOSEN
          ...this.state.todos.slice(0, index),
          // SLICE INDEX THAT WAS CHOSEN AND DISPLAYING NEW ARRAY
          ...this.state.todos.slice(index + 1),
        ]
      })
       
      })
    }
    render() {
      return (
        <ul>
         
            {this.state.todos.map((todo, index) => {
              return (
                <li>
                   {todo.description} 
                   {" "}
                  <button onClick={() => {
                    return this.deleteToDo(todo._id, index);
                  }}> Completed </button>
                  <br />
                  <small> (Need to complete) </small>
                </li>
              );
            })}
          
        </ul>
      );
    }
  }
  // RENDER COMPONENT ON THE SCREEN
  ReactDOM.render(<App />, document.querySelector(".container"));
