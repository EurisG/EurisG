const { Server } = require("http");

const fruits = [
    {
        name: 'apple',
        color: 'red',
        readyToEat: true
    },
    {
        name: 'banana',
        color: 'yellow',
        readyToEat: true
    },
    {
        name: 'pear',
        color: 'green',
        readyToEat: false
    }
];

// this links this data with the Server.js
module.exports = fruits