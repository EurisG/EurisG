console.table(data);

// const body = {
//     background: "rgb(251,126,63)",
//     background: "radial-gradient(circle, rgba(251,126,63,0.7988110422740524) 0%, rgba(237,235,235,0.7917760854341737) 100%)",
// }

// create class component 

class Total extends React.Component {
    render(){
        const total = this.props.cart.reduce((accumulator, element) => {
            return (accumulator += element.price);
            
        }, 0);

        return(
           <div>
               <h5>Total: {total}</h5>
           </div>
        )
    }
}
// create shopping list comp to receive the data from chart 
class ShoppingList extends React.Component {
    render() {

        const cartItems = this.props.cart.map((element) => {
            return(
                <li>
                    {element.name} {element.price}
                </li>
            )
        })
        return(
            <div>
            <ul>
               {cartItems}
            </ul>
            {this.props.children}
            </div>
        );
    }
};

class ProductList extends React.Component {
    state = {
      inShoppingCart: false,
    };
  
    handleCartToggle = () => {
      this.setState({
        inShoppingCart: !this.state.inShoppingCart,
      });
    };
    render() {
      console.log(this.state);
      return (
        <li onClick={() => {
            this.props.handleShoppingCart(this.props.element);
        }}>
          {this.props.element.name}{" "}
          {this.state.inShoppingCart ? <span>in Shopping Cart</span> : null}
        </li>
      );
    }
  }
  
  /// CREATE CLASS COMPONENT TO RENDER DATA TO THE SCREEN
  class App extends React.Component {
    // INITIALIZE YOUR STATE
    state = {
      data: data,
      value: "",
      name: "",
      price: 0,
      description: "Describe this item",
      isHiring: true,
      cart: [],
    };
  
    // CREATE A METHOD TO CHANGE USER INPUT
    handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value,
      });
    };
  
    // Create a method to submit the form
    handleFormSubmit = (e) => {
      e.preventDefault();
      // Lets add a new item to our data array
      const newItem = {
        name: this.state.name,
        price: this.state.price,
        description: this.state.description,
      };
  
      // Add the new item to our data array
      this.setState({
        data: [newItem, ...this.state.data],
      });
    };
  
    // CREATE A FUNCTION TO TOGGLE THE VALUE OF OUR HIRING STATE
    handleToggleHiring = () => {
      this.setState({
        isHiring: !this.state.isHiring,
      });
    };

    // create a method in app Component that keeps a handle inside product list component
    handleShoppingCart = (item) => {
        this.setState({
            cart: [item, ...this.state.cart],
        });
    };
  
    render() {
      console.table(this.state.cart);
      const dataList = this.state.data.map((element) => {
        return (
          <ul className="products">
            {/* <li>
              {element.name} {element.price}
            </li> */}
            
            <ProductList element={element} handleShoppingCart={this.handleShoppingCart} />
          </ul>
        );
      });
      return (
        <div >
          <h1>Big Time Shopping</h1>
          <h2>
            {this.state.isHiring ? (
              <h2>Yes we are hiring</h2>
            ) : (
              <h2>Sorry try again tomorrow </h2>
            )}
          </h2>
          <button onClick={this.handleToggleHiring}>Toggle Hiring</button>
          <form onSubmit={this.handleFormSubmit}>
            <label htmlFor="name">Name: </label>
            <input
              id="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <br />
            <br />
            <label htmlFor="price">Price: </label>
            <input
              id="price"
              type="text"
              value={this.state.price}
              onChange={this.handleChange}
            />
            <br />
            <br />
            <label htmlFor="description">Description: </label>
            <input
              id="description"
              type="text"
              value={this.state.description}
              onChange={this.handleChange}
            />
            <br />
            <br />
            <input type="submit" />
          </form>
          <div className="preview">
            <h2>Preview our new item</h2>
            <h3>{this.state.name}</h3>
            <h4>{this.state.price}</h4>
            <h5>{this.state.description}</h5>
          </div>
          {dataList}
          <div className='cart'>
            <h3> Shopping Cart </h3>
                <ul>
                <ShoppingList cart={this.state.cart}>
                <Total cart={this.state.cart}/>
                </ShoppingList>
                </ul>
                </div>
                
          {/* Passing props from App component to ProductList component */}
          {/* <ProductList data={data} handleCartToggle={this.handleCartToggle} /> */}
        </div>
      );
    }
  }
  
  // RENDER COMPONENT TO THE SCREEN
  ReactDOM.render(<App />, document.querySelector(".container"));