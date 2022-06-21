import React , { useState } from 'react'
import ProductList from './ProductList';
import ShoppingList from './ShoppingList';
import Total from './Total';
import Data  from './Data';


const App = () => {
   
    const [data, setData] = useState([{Data}]);

    console.log(Data)
    return(
        <div>
            <h1>React Shopping Cart</h1>
            <div>
            <li>{Data.map((element) => {
               return element.name + "" + element.price
            })}</li>
            
           </div>
           
            {/* <h3>{data}</h3> */}
            <ProductList  />
            <ShoppingList />
            <Total />
            {/* <Data /> */}
        </div>
    )
};

export default App;