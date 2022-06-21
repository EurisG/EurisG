import React , { useState } from 'react'
import ProductList from './ProductList';
import ShoppingList from './ShoppingList';
import Total from './Total';
import Data  from './Data';
import Form from './Form';


const App = () => {
   
    const [state, setState] = useState({ name: "", price: "", description: "" });

//    function handleChange(e) {
//         setData(
//           e.target.id 
//         );
//       };

      const handleFormSubmit = (e) => {
        e.preventDefault()
        const { name, price, description, value} = e.target;
        setState({
            name: value, price: value, description: value
        });
        console.log('clicked')
        };

    // console.log(handleFormSubmit)
    return(
        <div>
            <h1>React Shopping Cart</h1>
            <Form />
            <ProductList  />
            <ShoppingList />
            <Total />
            {/* <Data /> */}
        </div>
    )
};

export default App;