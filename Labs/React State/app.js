console.table(data);

// create class component to render to screen
class App extends React.Component {
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
                <h1>App Component</h1>
                {datalist}
            </div>
        );
    }
};

// Render component to the browser 
ReactDOM.render(<App/>,document.querySelector('.container'))
