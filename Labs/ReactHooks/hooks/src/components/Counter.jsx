// IMPORT REACT
import React, { useEffect, useState } from 'react'

// ADDITIONAL IMPORTS


// CREATE COMPONENT
const Counter = () => {
    // declaring new state inside component
    const [counter, setCounter] = useState(0);
    // console.log(counter)
    const [evenCounter, setEvenCounter] = useState(0);
    
    useEffect(() => {
        console.log('random log')
    }, [evenCounter])
    
    // create a function to add one to counter 
    const handleAddOne = () => {
        if (counter % 2 === 0){
            setEvenCounter(evenCounter + 1);
        }
        setCounter(counter + 1); //0 + 1 = 1 => setCounter(1)
    };
    const handleSubtractOne = () => {
        setCounter(counter === 0);
        setEvenCounter(counter === 0);
    };
    return(
        <div>
            <h1>Counter: {counter}</h1>
            <h1>Even Counter: {evenCounter}</h1>
            <button onClick={handleAddOne}>Click Me to Add oNe</button>
            <br />
            < br /> 
            <button onClick={handleSubtractOne}>Click Me to Remove All</button>
        </div>
    )
};

// EXPORT COMPONENT
export default Counter;