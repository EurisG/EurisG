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
  paid: true
}
// receipt1 class component 
class ReceiptOne extends React.Component {
    render(){
        console.log(this.props.receipt.order.paid)
        return(
            <div >
                <h2>{this.props.receipt.person}</h2>
                <h5><span>Main: </span>{this.props.receipt.order.main}</h5>
                <h5><span>Protein: </span>{this.props.receipt.order.protein}</h5>
                <h5><span>Rice: </span>{this.props.receipt.order.rice}</h5>
                <h5><span>Sauce: </span>{this.props.receipt.order.sauce}</h5>
                <h5><span>Drink: </span>{this.props.receipt.order.drink}</h5>
                <h5><span>Cost: </span>{this.props.receipt.order.cost}</h5>
                
            </div>
        )
    }
};
class ReceiptTwo extends React.Component {
    render(){
        console.log(this.props.receipt.order.paid)
        return(
            <div >
                <h2>{this.props.receipt.person}</h2>
                <h5><span>Main: </span>{this.props.receipt.order.main}</h5>
                <h5><span>Protein: </span>{this.props.receipt.order.protein}</h5>
                <h5><span>Rice: </span>{this.props.receipt.order.rice}</h5>
                <h5><span>Sauce: </span>{this.props.receipt.order.sauce}</h5>
                <h5><span>Drink: </span>{this.props.receipt.order.drink}</h5>
                <h5><span>Cost: </span>{this.props.receipt.order.cost}</h5>
                
            </div>
        )
    }
};
class ReceiptThree extends React.Component {
    render(){
        console.log(this.props.receipt.order.paid)
        return(
            <div >
                <h2>{this.props.receipt.person}</h2>
                <h5><span>Main: </span>{this.props.receipt.order.main}</h5>
                <h5><span>Protein: </span>{this.props.receipt.order.protein}</h5>
                <h5><span>Rice: </span>{this.props.receipt.order.rice}</h5>
                <h5><span>Sauce: </span>{this.props.receipt.order.sauce}</h5>
                <h5><span>Drink: </span>{this.props.receipt.order.drink}</h5>
                <h5><span>Cost: </span>{this.props.receipt.order.cost}</h5>
                
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
            <div>
                <ReceiptOne receipt={this.state.receipt1} />
                <ReceiptTwo receipt={this.state.receipt2} />
                <ReceiptThree receipt={this.state.receipt3} />
            </div>
        )
    }
};


ReactDOM.render(<App />, document.querySelector(".container"));
