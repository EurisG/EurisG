import React from 'react';

const Component = () => {
    // cREATE AN ARRAY OF OBJECT 
    const dogs =[
        {
            name: 'Sparky',
            age: '5',
        },
        {
            name: 'Spot',
            age: '15',
        },
        {
            name: 'Ralph',
            age: '40',
        },
        {
            name: 'Fido',
            age: '56',
        },
    ];

    const dogList = dogs.map((dog) => {
        return(
            <div>
                <h1>{dog.name}</h1>
                <h2>{dog.age}</h2>
            </div>
        )
    })
    return(
        <div>
            {dogList}
        </div>
    )
};

export default Component;