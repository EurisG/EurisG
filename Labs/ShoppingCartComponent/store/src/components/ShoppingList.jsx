import React from 'react'
import Data from './Data';

const ShoppingList = () => {
    return(
        <div>
            <div>
            <li>{Data.map((element) => {
               return element.name + "" + element.price
            })}</li>
            
           </div>
           

        </div>
    )
};

export default ShoppingList;