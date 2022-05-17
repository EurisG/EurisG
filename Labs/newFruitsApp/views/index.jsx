// const { extend } = require('lodash')
const React = require('react')
const fruits = require('../models/fruits')

class Index extends React.Component{
    render() {
        const {fruits} = this.props;
        return(
            // Ternary "Logic" ? "ifTrue" : "If False"
            <>
             <h1> Fruits Index Page </h1>
                 <ul>
                    { fruits.map(( fruit, i ) => {
                        return (
                            <li>
                                The{' '}
                                <a href={`/fruits/${i}`}>
                                    {fruit.name}
                                </a> {' '}
                                is {fruits.color} <br></br>
                                    {fruit.readyToEat ? " Its ready! " : "Its not ready !"}
                            </li>
                            );

                })}

                </ul>

            </>
        );

      

        
    }

}

module.exports = Index