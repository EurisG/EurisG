import React from 'react';


const SenderChild = (props) => {
    console.log(props);
    return(
        <div>
            <button onClick={() => {
                return props.updateState('Goodbye!');
            }}>Click Me</button>
            
        </div>
    )
};

export default SenderChild;