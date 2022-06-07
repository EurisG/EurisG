console.table(data);

// create class component to render to screen
class App extends React.Component {
    // initialize your state 
    state = {
        data: data,
        value: "",
        price:  0,
        description: "Describe this item",
    };

    // create a method to change user input 
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    render() {
        const datalist = data.map((element) => {
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
                <form>
                    <labe htmlFor="name">Name:</labe>
                <input type='text' value={this.state.value} 
                onChange={this.handleChange} id='name'/>
                </form>
                {datalist}
                {/* {this.state.data[3].name} */}
            </div>
        );
    }
};

// Render component to the browser 
ReactDOM.render(<App/>,document.querySelector('.container'))
