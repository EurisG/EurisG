class DivOne extends React.Component {
    render() {
        return(
        <div>
            <DivTwo />
        </div>
            
        )
    }
};
class DivTwo extends React.Component {
    render() {
        return(
        <div>
           <DivThree />
           <DivThree />
        </div>
            
        )
    }
};
class DivThree extends React.Component {
    state = {
        tardis: {
            name: 'Time and Relative Dimension in Space',
            caps: false,
                }
                
    };
    changeIt = (tardis) => {
        if (this.state.tardis.caps) {
          this.setState({
            tardis: {
              name: this.state.tardis.name.toLowerCase(),
              caps: false
            }
          })
        } else {
          this.setState({
            tardis: {
              name: this.state.tardis.name.toUpperCase(),
              caps: true
            }
          })
        }
      }
    render() {
        return(
        <div onClick={() => this.changeIt(this.state.tardis.name)}>
             <h3>
                {this.state.tardis.name}
                </h3>
        </div>
            
        )
    }
};





class App extends React.Component {
    // state = {
    //     tardis: {
    //         name: 'Time and Relative Dimension in Space',
    //         caps: false,
    //             }
                
    // };
    // changeIt = (tardis) => {
    //     if (this.state.tardis.caps) {
    //       this.setState({
    //         tardis: {
    //           name: this.state.tardis.name.toLowerCase(),
    //           caps: false
    //         }
    //       })
    //     } else {
    //       this.setState({
    //         tardis: {
    //           name: this.state.tardis.name.toUpperCase(),
    //           caps: true
    //         }
    //       })
    //     }
    //   }
    
    render() {
        console.log(this.state)
        return(
            <div>
                {/* <h3 onClick={this.state.changeIt}>
                    hello
                {this.changeIt.name}
                </h3> */}

                <DivOne />
                {/* <DivTwo />
                <DivThree /> */}
            </div>
        )
    }
}


ReactDOM.render(<App /> , document.querySelector('.container'))