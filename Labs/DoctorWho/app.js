class DivOne extends React.Component {
    render() {
        return(
        <div>
            <h3></h3>
        </div>
            
        )
    }
};
class DivTwo extends React.Component {
    render() {
        return(
        <div>
            <h3></h3>
        </div>
            
        )
    }
};
class DivThree extends React.Component {
    render() {
        return(
        <div>
            <h3></h3>
        </div>
            
        )
    }
};





class App extends React.Component {
    state = {
        tardis: {
            name: 'Time and Relative Dimension in Space',
            caps: false,
                }
                
    };
    changeIt = (text) => {
        if (this.state.tardis.caps) {
          this.setState({
            tardis: {
              name: text.toLowerCase(),
              caps: false
            }
          })
        } else {
          this.setState({
            tardis: {
              name: text.toUpperCase(),
              caps: true
            }
          })
        }
      }
    
    render() {
        console.log(this.state)
        return(
            <div>
                <h3 onClick={this.changeIt}>
                    hello
                {this.changeIt.name}
                </h3>

                <DivOne />
                <DivTwo />
                <DivThree />
            </div>
        )
    }
}


ReactDOM.render(<App /> , document.querySelector('.container'))