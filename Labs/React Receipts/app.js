const receipt1 =
  {
    person: 'Karolin',
    order: {
      main: 'Burrito',
      protein: 'Organic Tofu',
      rice: 'Purple Rice',
      sauce: 'Green Crack',
      toppings: [
        'Baby Bok Choy', 'Cucumber Kimchi'
      ],
      drink: 'Korchata',
      cost: 22
    },
    paid: false
  }
const receipt2 = {
  person: 'Jerrica',
  order: {
    main: 'Rice Bowl',
    protein: 'Ginger Soy Chix',
    rice: 'Sticky Rice',
    sauce: 'Korilla',
    toppings: [
      'Yuzu Pickled Sweet Pepper', 'Kale'
    ],
    drink: 'Korchata',
    cost: 19
  },
  paid: false
}
const receipt3 = {
  person: 'Matt',
  order: {
    main: 'Salad Bowl',
    protein: 'Organic Tofu',
    rice: 'none',
    sauce: "K'lla",
    toppings: [
      'Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi'
    ],
    drink: 'Sparkling Blood Orange Soda',
    cost: 20
  },
  paid: false
}

// styling 

const receipts = {
    display: "flex",
    justifyContent: "space-around",
   
}
const box = {
    border: "solid 5px #27ff77",
    padding: "30px",
    webkitBoxShadow: "0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(255,255,255,0)",
    boxShadow: "0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(255,255,255,0)",
    background: "rgb(105,105,105)",
    background: "linear-gradient(0deg, rgba(105,105,105,0.923987174267101) 0%, rgba(99,99,99,0.5787103013029316) 100%)"
}

const title = {
    textAlign: "center",
    textDecoration : "underline"
}

// receipt1 class component 
class ReceiptOne extends React.Component {
  
    state = { 
        paid: false,
    }
    paidHandling = () => {
        this.setState({
           paid: !this.state.receipt1.paid,
        })
        };
    
    
    render(){
        console.log(this.state)
        console.log(this.state.receipt1)
        return(
            <div >
                <h2>{this.props.receipt.person}</h2>
                <h5><span>Main: </span>{this.props.receipt.order.main}</h5>
                <h5><span>Protein: </span>{this.props.receipt.order.protein}</h5>
                <h5><span>Rice: </span>{this.props.receipt.order.rice}</h5>
                <h5><span>Sauce: </span>{this.props.receipt.order.sauce}</h5>
                <h5><span>Drink: </span>{this.props.receipt.order.drink}</h5>
                <h5 style={{fontSize: "20px" }}><span>Cost: </span>{this.props.receipt.order.cost}</h5>
                <button onClick={() => {this.state.receipt1.paid}} >Paid</button>
            </div>
        )
    }
};
class ReceiptTwo extends React.Component {
    state = {
        paid: false,
    }
    paidHandling = () => {
        this.setState({
           paid:!this.state.receipt2.paid,
        })
        };
    render(){
        console.log(this.state)
        // console.log(this.state.paid)
        return(
            <div >
                <h2>{this.props.receipt.person}</h2>
                <h5><span>Main: </span>{this.props.receipt.order.main}</h5>
                <h5><span>Protein: </span>{this.props.receipt.order.protein}</h5>
                <h5><span>Rice: </span>{this.props.receipt.order.rice}</h5>
                <h5><span>Sauce: </span>{this.props.receipt.order.sauce}</h5>
                <h5><span>Drink: </span>{this.props.receipt.order.drink}</h5>
                <h5 style={{fontSize: "20px" }}><span>Cost: </span>{this.props.receipt.order.cost}</h5>
                <button onClick={() => {this.state.receipt2.paid}} >Paid</button>
            </div>
        )
    }
};
class ReceiptThree extends React.Component {
    state = {
        paid: false,
    }
    paidHandling = () => {
        this.setState({
           paid: !this.state.receipt3.paid,
        })
        };
    render(){
        console.log(this.state)
        // console.log(this.state.paid)
        return(
            <div >
                <h2>{this.props.receipt.person}</h2>
                <h5><span>Main: </span>{this.props.receipt.order.main}</h5>
                <h5><span>Protein: </span>{this.props.receipt.order.protein}</h5>
                <h5><span>Rice: </span>{this.props.receipt.order.rice}</h5>
                <h5><span>Sauce: </span>{this.props.receipt.order.sauce}</h5>
                <h5><span>Drink: </span>{this.props.receipt.order.drink}</h5>
                <h5 style={{fontSize: "20px" }}><span>Cost: </span>{this.props.receipt.order.cost}</h5>
                <button onClick={() => {this.state.receipt3.paid}} >Paid</button>
            </div>
        )
    }
};

class App extends React.Component {
    constructor(props){
        super(props)
    this.state = {
        receipt1: receipt1,
        receipt2: receipt2,
        receipt3: receipt3
        }
    };
  
   
   
    render() {
        
        return(
            <div >
                 <div style={title}>
                    <h1>Receipts Unpaid:</h1>
                </div>
               
               <div style={receipts}>
               <div style={box}>
                    { this.state.receipt1.paid ? '' : <ReceiptOne receipt={this.state.receipt1}  />}
                </div>
                <div style={box}>
                    { this.state.receipt2.paid ? '' : <ReceiptTwo receipt={this.state.receipt2} />}
                </div>
                <div style={box}>
                    { this.state.receipt3.paid ? '' : <ReceiptThree receipt={this.state.receipt3} />}
                </div>
                </div>
            </div>
        )
    }
};


ReactDOM.render(<App />, document.querySelector(".container"));
