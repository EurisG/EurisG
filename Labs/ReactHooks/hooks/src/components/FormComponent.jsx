import React, { useRef } from 'react';

const FormComponent = () => {
    const inputRef = useRef();
    const pTagRef = useRef();

    const handleClick = () => {
        console.log(inputRef.current.value);
    }
    return(
        <div>
            <input type='text' ref={inputRef} />
            <p ref={pTagRef}>this is a pTag</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}







export default FormComponent;