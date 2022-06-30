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

    // CREATE A DELETE TODO METHOD 
    deleteToDo = (id, index) => {
      console.log(id, index)
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
                  }}> X </button>
                  <small> complete </small>
                </li>
              );
            })}
          
        </ul>
      );
    }
  }
  // RENDER COMPONENT ON THE SCREEN
  ReactDOM.render(<App />, document.querySelector(".container"));
