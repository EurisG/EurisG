import React, {useState} from 'react';

import SenderChild from './SenderChild';
import ReceiverChild from './ReceiverChild';
const Parent = () => {
    const [state, setState] = useState('Hello!');

    const updateState = (data) => {
       setState(data)
    }
    return(
        <div>
            <SenderChild updateState={updateState}/>
            <ReceiverChild state={state}/>
        </div>
    )
};

export default Parent;