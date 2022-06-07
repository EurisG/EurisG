console.table(data);

// create class component to render to screen
class App extends React.Component {
    // initialize your state 
    state = {
        data: data,
    };
    render() {
        const datalist = data.map((element) => {
            return(
                <ul>
                    <li>{element.name}</li>
                </ul>
            )
        })
        return(
            <div>
                <h1>Big Time Shopping</h1>
                {this.state.data[3].name}
            </div>
        );
    }
};

// Render component to the browser 
ReactDOM.render(<App/>,document.querySelector('.container'))
