// IMPORT REACT
import React from 'react'

// ADDITIONAL IMPORTS
import Counter from './Counter'
import FormComponent from './FormComponent';
import FormControlled from './FormControlled';

// CREATE COMPONENT
const App = () => {
    return(
        <div>
            <h1>Hello App</h1>
            <Counter />
            <br />
            <FormComponent />
            <br />
            <br />
            <FormControlled />
        </div>
       
    )
    
}

// EXPORT COMPONENT

export default App;