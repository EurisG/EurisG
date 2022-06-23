import React, { useEffect, useState } from 'react';

import axios from 'axios';

const User = () => {

    const [user , setUser] = useState([]);

    useEffect(() => {
        const helperFunction = async () => {
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/users",
            );
            const data = response.data
            setUser(data)
        }
        helperFunction();
    }, []);
   
    return(
        <div>
        <h1>User Component</h1>
        {user[0]?.id}
        </div>
    );
};


export default User;