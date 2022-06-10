// IMPORT REACT 
import React from 'react';

import Child from './Child';
import Component from './Component';
// RETURN APP COMPONENT 
const App = () => {
    // create variable 
    let variable;
    const setVariable = (data) => {
        variable = data;
    }
    return(
        <div>
            <Child
            greeting={'Hello World!'}
            number={281}
            setVariable={setVariable}/>
            <Component />
            <h1>{10 * 10}</h1>
        </div>
    );
};
// EXPORT APP COMPONENT
export default App;