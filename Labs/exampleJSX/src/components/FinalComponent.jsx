import React from "react";

const FinalComponent = () => {
    const Arthur = {
        name: "Arthur Bernier",
        age: "35",
        email: "ceo@arthurbernierjr.com",
    };

    return Object.keys(Arthur).map((key) => {
        return (
            <h2 key={key}>
                {key}: {Arthur[key]}
            </h2>
        )
    });

}

export default FinalComponent;