  // CREATE APP COMPONENT
class App extends React.Component {
  state = {
    todos: [],
    description: "",
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
  // Create a on change method to keep track of whatever the user is typing inside our input box
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  // Lets create a method to help submit our form
  handleFormSubmission = (e) => {
       // STOPS RELOADING THE PAGE AFTER SUBMITTING
    e.preventDefault();
    fetch("/todos", {
        // changing description to a string in order to post
      body: JSON.stringify({ description: this.state.description }),
      method: "POST",
      headers: {
          // CAN FIND HEADERS IN POSTMAN
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.data.newTodo)
        this.setState({
          description: '',
          todos: [data.data.newTodo, ...this.state.todos]
        })
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
  // Create a delete todo method
  deleteToDo = (id, index) => {
     // console.log(id, index)
    fetch(`todos/${id}`, { method: "DELETE" }).then(() => {
      this.setState({
        todos: [
          ...this.state.todos.slice(0, index), // Take everything before what the user clicked on!
          ...this.state.todos.slice(index + 1), // Take everything after what the user clicked on!
        ],
      });
    });
  };
  render() {
    return (
      <div>
        <h1> To Do List </h1>
        <form onSubmit={this.handleFormSubmission}>
          <label htmlFor="description">Add to list:</label>
          {' '}
          <input
            type="text"
            value=""
            id="description"
            onChange={this.handleChange}
            value={this.state.description}
          />
          {' '}
          <input type="submit" />
         
        </form>
        <h2>{this.state.description}</h2>
        <hr />
        <h2>My list</h2>
        <ul>
          {this.state.todos.map((todo, index) => {
            return (
              <li>
                {todo.description}{" "}
                <button
                  onClick={() => {
                    return this.deleteToDo(todo._id, index);
                  }}
                >
                  {" "}
                  Completed{" "}
                </button>
                <br />
                <small> (Need to complete) </small>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
// RENDER COMPONENT ON THE SCREEN
ReactDOM.render(<App />, document.querySelector(".container"));