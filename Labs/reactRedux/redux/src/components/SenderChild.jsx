import React from 'react';


const SenderChild = (props) => {
    console.log(props);
    return(
        <div>
            <button onClick={() => {
                return props.updateState('Goodbye!');
            }}>Goodbye</button>
              <button onClick={() => {
                return props.updateState('Hello!');
            }}>Hello</button>
            
        </div>
    )
};

export default SenderChild;