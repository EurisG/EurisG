console.table(data);

// create class component to render to screen
class App extends React.Component {
    // initialize your state 
    state = {
        data: data,
        value: "",
        name: "",
        price:  0,
        description: "Describe this item",
    };

    // create a method to change user input 
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        });
    };

    // create method to submit the form 
    handleFormSubmit = (e) => {
        e.preventDefault();

        // lets add a new item 
        const newItem = {
            name: this.state.name,
            price: this.state.price,
            description: this.state.description,
        };

        // add the new item to array 
        this.setState({
            data: [newItem, ...this.state.data]
        });
        console.log(this.state.data)
    };

    render() {
        const datalist = this.state.data.map((element) => {
            return(
                <ul>
                    <li>{element.name}{' '}
                        ${element.price}
                    </li>
                </ul>
            )
        })
        return(
            <div>
                <h1>Big Time Shopping</h1>
                     <form onSubmit={this.handleFormSubmit}>
                        <label htmlFor="name">Name:</label>{' '}
                         <input id='name' type='text' 
                         value={this.state.name}
                            onChange={this.handleChange}  />
                   <br />
                    <br />
                        <label htmlFor="price">Price:</label>{' '}
                        <input id='price' type='text' 
                        value={this.state.price}
                            onChange={this.handleChange}  />
                       <br />
                        <br />
                        <label htmlFor="description">Description:</label>{' '}
                        <input id='description' type='text' 
                        value={this.state.description}
                            onChange={this.handleChange} />
                            <br />
                            <br />
                            <input type='submit'></input>
                        </form>
                        <div>
                            <h2>Preview our new item</h2>
                            <h3>{this.state.name}</h3>
                            <h4>{this.state.price}</h4>
                             <h5>{this.state.description}</h5>
                        </div>
                {datalist}
                {/* {this.state.data[3].name} */}

            </div>
        );
    }
};

// Render component to the browser 
ReactDOM.render(<App/>,document.querySelector('.container'))
