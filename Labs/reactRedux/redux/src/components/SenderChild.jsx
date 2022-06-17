import React from 'react';


const SenderChild = (props) => {
    console.log(props);
    return(
        <div>
            <button onClick={props.updateState}>Click Me</button>
            
        </div>
    )
};

export default SenderChild;