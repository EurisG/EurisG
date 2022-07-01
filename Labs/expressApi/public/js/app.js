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
    e.preventDefault();
    fetch("/todos", {
      body: JSON.stringify({
        description: this.state.description,
        complete: false,
      }),
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data.data.newTodo);
        this.setState({
          description: "",
          todos: [data.data.newTodo, ...this.state.todos],
        });
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
  // Create a delete todo method
  deleteToDo = (id, index) => {
    fetch(`todos/${id}`, { method: "DELETE" }).then(() => {
      this.setState({
        todos: [
          ...this.state.todos.slice(0, index), // Take everything before what the user clicked on!
          ...this.state.todos.slice(index + 1), // Take everything after what the user clicked on!
        ],
      });
    });
  };
  // Create a method to update the completion status
  updateTodo = (todo, index) => {
    // Change the completion status
    todo.complete = !todo.complete;
    console.log(todo);
    fetch(`todos/${todo._id}`, {
      body: JSON.stringify(todo),
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json, text/plain, */*",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({
          todos: [...this.state.todos],
        });
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
  render() {
    return (
      <div>
        <h1> To Dos </h1>
        <form onSubmit={this.handleFormSubmission}>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            onChange={this.handleChange}
            value={this.state.description}
          />
          <input type="submit" />
        </form>
        <h2>{this.state.description}</h2>
        <hr />
        <ul>
          {this.state.todos.map((todo, index) => {
            return (
              <li>
                <div className={todo.complete ? "complete" : ""}>
                  {todo.description}{" "}
                </div>
                <button
                  onClick={() => {
                    return this.deleteToDo(todo._id, index);
                  }}
                >
                  {" "}
                  Delete{" "}
                </button>{" "}
                <button
                  onClick={() => {
                    return this.updateTodo(todo, index);
                  }}
                >
                  {" "}
                  Complete{" "}
                </button>
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