import React from 'react'
import Data from './Data';

const ShoppingList = () => {
    return(
        <div>
            <div>
                <ul>
            {Data.map((element) => {
               return <ul>{element.name}  {" "} {element.price}</ul>
            })}
            </ul>
           </div>
           

        </div>
    )
};

export default ShoppingList;